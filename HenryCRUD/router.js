let express = require('express');
let bodyParse = require('body-parser');
const router = express.Router();
let mysql = require('mysql');

router.use(bodyParse.urlencoded({
    extended: true
}));

router.use(bodyParse.json());

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "",
    database: "Henry"
});

router.get('/books', (req, res, next) => {
    console.log('GET request received!');
    connection.query("SELECT * from Book", (err, result, fields) => {
        if(err) {
            console.log("we have a problem", err);
        }
        res.send(result);
    })
})

router.post('/books', (req,res) => {
    console.log('UPDATE request received!');
    console.log(req.body);
    connection.query(
        `UPDATE Book
        SET bookCode='${req.body.bookCode}',
        paperback='${req.body.paperback}',
        publisherCode='${req.body.publisherCode}',
        title='${req.body.title}',
        type='${req.body.type}'
        WHERE bookCode = '${req.body.bookCode}'
        `, (err, result, fields) => {
            if(err) {
                console.log("Problem with update", err);
                res.send("Error!")
            }
            else {
                console.log("Successfully updated!");
                res.send("Success!");
            }
        }
    )
})

router.post('/books/delete', (req,res) => {
    console.log('DELETE request received!');
    console.log(req.body);
    connection.query(
        `DELETE FROM Book
        WHERE bookCode = '${req.body.bookCode}'
        `, (err, result, fields) => {
            if(err) {
                console.log("Problem with deletion", err);
                res.send("Error!")
            }
            else {
                console.log("Successfully deleted!");
                res.send("Success!");
            }
        }
    )
})

router.post('/books/insert', (req, res) => {
    console.log('INSERT request received');
    console.log(req.body);
    connection.query(
        `INSERT into Book(bookCode, title, publisherCode, type, paperback)
            values('${req.body.bookCode}', '${req.body.title}',
            '${req.body.publisherCode}', '${req.body.type}',
            '${req.body.paperback}')
        `, (err, result, fields) => {
                if(err) {
                    console.log("Problem with insertion: ", err);
                    res.send("Error!");
                }
                else {
                    console.log("Successfully inserted!");
                    res.send("Success!");
                }
            }
    )
})

router.get('/authors', (req, res, next) => {
    console.log('GET request received!');
    connection.query("SELECT * from Author", (err, result, fields) => {
        if(err) {
            console.log("we have a problem", err);
        }
        res.send(result);
    })
})

router.post('/authors', (req,res) => {
    console.log('UPDATE request received!');
    console.log(req.body);
    connection.query(
        `UPDATE Author
        SET authorNum='${req.body.authorNum}',
        authorLast='${req.body.authorLast}',
        authorFirst='${req.body.authorFirst}'
        WHERE authorNum = '${req.body.authorNum}'
        `, (err, result, fields) => {
            if(err) {
                console.log("Problem with update", err);
                res.send("Error!")
            }
            else {
                console.log("Successfully updated!");
                res.send("Success!");
            }
        }
    )
})

router.post('/authors/delete', (req,res) => {
    console.log('DELETE request received!');
    console.log(req.body);
    connection.query(
        `DELETE FROM Author
        WHERE authorNum = '${req.body.authorNum}'
        `, (err, result, fields) => {
            if(err) {
                console.log("Problem with deletion", err);
                res.send("Error!")
            }
            else {
                console.log("Successfully deleted!");
                res.send("Success!");
            }
        }
    )
})

router.post('/authors/insert', (req, res) => {
    console.log('INSERT request received');
    console.log(req.body);
    connection.query(
        `INSERT into Author(authorNum, authorLast, authorFirst)
            values('${req.body.authorNum}', '${req.body.authorLast}',
            '${req.body.authorFirst}')
        `, (err, result, fields) => {
                if(err) {
                    console.log("Problem with insertion: ", err);
                    res.send("Error!");
                }
                else {
                    console.log("Successfully inserted!");
                    res.send("Success!");
                }
            }
    )
})

router.get('/publishers', (req, res, next) => {
    console.log('GET request received!');
    connection.query("SELECT * from Publisher", (err, result, fields) => {
        if(err) {
            console.log("we have a problem", err);
        }
        res.send(result);
    })
})

router.post('/publishers', (req,res) => {
    console.log('UPDATE request received!');
    console.log(req.body);
    connection.query(
        `UPDATE Publisher
        SET publisherCode='${req.body.publisherCode}',
        publisherName='${req.body.publisherName}',
        city='${req.body.city}'
        WHERE publisherCode = '${req.body.publisherCode}'
        `, (err, result, fields) => {
            if(err) {
                console.log("Problem with update", err);
                res.send("Error!")
            }
            else {
                console.log("Successfully updated!");
                res.send("Success!");
            }
        }
    )
})

router.post('/publishers/delete', (req,res) => {
    console.log('DELETE request received!');
    console.log(req.body);
    connection.query(
        `DELETE FROM Publisher
        WHERE publisherCode = '${req.body.publisherCode}'
        `, (err, result, fields) => {
            if(err) {
                console.log("Problem with deletion", err);
                res.send("Error!")
            }
            else {
                console.log("Successfully deleted!");
                res.send("Success!");
            }
        }
    )
})

router.post('/publishers/insert', (req, res) => {
    console.log('INSERT request received');
    console.log(req.body);
    connection.query(
        `INSERT into Publisher(publisherCode, publisherName, city)
            values('${req.body.publisherCode}', '${req.body.publisherName}',
            '${req.body.city}')
        `, (err, result, fields) => {
                if(err) {
                    console.log("Problem with insertion: ", err);
                    res.send("Error!");
                }
                else {
                    console.log("Successfully inserted!");
                    res.send("Success!");
                }
            }
    )
})

router.get('/copies', (req, res, next) => {
    console.log('GET request received!');
    connection.query("SELECT * from Copy", (err, result, fields) => {
        if(err) {
            console.log("we have a problem", err);
        }
        res.send(result);
    })
})

router.post('/copies', (req,res) => {
    console.log('UPDATE request received!');
    console.log(req.body);
    connection.query(
        `UPDATE Copy
        SET bookCode='${req.body.bookCode}',
        branchNum='${req.body.branchNum}',
        copyNum='${req.body.copyNum}',
        quality='${req.body.quality}',
        price='${req.body.price}'
        WHERE (bookCode = '${req.body.bookCode}' AND branchNum='${req.body.branchNum}' AND copyNum='${req.body.copyNum}')
        `, (err, result, fields) => {
            if(err) {
                console.log("Problem with update", err);
                res.send("Error!")
            }
            else {
                console.log("Successfully updated!");
                res.send("Success!");
            }
        }
    )
})

router.post('/copies/delete', (req,res) => {
    console.log('DELETE request received!');
    console.log(req.body);
    connection.query(
        `DELETE FROM COPY
        WHERE (bookCode = '${req.body.bookCode}' AND branchNum='${req.body.branchNum}' AND copyNum='${req.body.copyNum}')
        `, (err, result, fields) => {
            if(err) {
                console.log("Problem with deletion", err);
                res.send("Error!")
            }
            else {
                console.log("Successfully deleted!");
                res.send("Success!");
            }
        }
    )
})

router.post('/copies/insert', (req, res) => {
    console.log('INSERT request received');
    console.log(req.body);
    connection.query(
        `INSERT into Copy(bookCode, branchNum, copyNum, quality, price)
            values('${req.body.bookCode}', '${req.body.branchNum}',
            '${req.body.copyNum}', '${req.body.quality}',
            '${req.body.price}')
        `, (err, result, fields) => {
                if(err) {
                    console.log("Problem with insertion: ", err);
                    res.send("Error!");
                }
                else {
                    console.log("Successfully inserted!");
                    res.send("Success!");
                }
            }
    )
})

router.get('/branches', (req, res, next) => {
    console.log('GET request received!');
    connection.query("SELECT * from Branch", (err, result, fields) => {
        if(err) {
            console.log("we have a problem", err);
        }
        res.send(result);
    })
})

router.get('/inventory', (req, res, next) => {
    console.log('GET request received!');
    connection.query("SELECT * from Inventory", (err, result, fields) => {
        if(err) {
            console.log("we have a problem", err);
        }
        res.send(result);
    })
})

router.get('/wrote', (req, res, next) => {
    console.log('GET request received!');
    connection.query("SELECT * from Wrote", (err, result, fields) => {
        if(err) {
            console.log("we have a problem", err);
        }
        res.send(result);
    })
})

router.post('/search', (req, res, next) => {
    console.log('GET request received!');
    connection.query(
        `
            select  Book.bookCode, Book.title, authorLast, authorFirst,
                branchName, branchLocation, publisherName, OnHand
            from Book 
            natural join Author as A
            natural join Inventory as I
            natural join Branch as Br
            natural join Publisher as P
            natural join Wrote as W
            where Book.title like '%${req.body.search}%'
        `, (err, result, fields) => {
        if(err) {
            console.log("we have a problem", err);
        }
        res.send(result);
    })
})

module.exports = router;
