import React, {Component} from 'react';

class Instrucions extends Component {
    render() {
        return(
            <h3>
                <ol>
                    <li>You can navigate the website using the navigation bar on the top of the page.<br />
                        Don't worry, it's static so it'll never disappear.
                    </li><br />
                    <li>The 'Books' page loads all existing data from the 'Book' table. Here you can <br />
                        add new books by pressing the 'ADD BOOK' button, and modify/delete existing<br />
                        entries. Unfortunately, after deletion, you have to reload the page to see <br />
                        the changes made.
                    </li><br />
                    <li>The 'Authors' page loads all existing data from the 'Author' table. Here you can <br />
                        add new authors by pressing the 'ADD AUTHOR' button, and modify/delete existing<br />
                        entries. Unfortunately, after deletion, you have to reload the page to see <br />
                        the changes made.
                    </li><br />
                    <li>The 'Publishers' page loads all existing data from the 'Publisher' table. Here you can <br />
                        add new publishers by pressing the 'ADD PUBLISHER' button, and modify/delete existing<br />
                        entries. Unfortunately, after deletion, you have to reload the page to see <br />
                        the changes made.
                    </li><br />
                    <li>The 'Copies' page loads all existing data from the 'Copy' table. Here you can <br />
                        add new copies by pressing the 'ADD COPIES' button, and modify/delete existing<br />
                        entries. Unfortunately, after deletion, you have to reload the page to see <br />
                        the changes made.
                    </li><br />
                    <li>The 'Branches' page loads all existing data from the 'Branch' table. Here you can <br />
                        only view the existing entries from the database. The text boxes are static and  <br />
                        cannot be modified.
                    </li><br />
                    <li>The 'Inventory' page loads all existing data from the 'Inventory' table. Here you can <br />
                        only view the existing entries from the database. The text boxes are static and  <br />
                        cannot be modified.
                    </li><br />
                    <li>The 'Wrote' page loads all existing data from the 'Wrote' table. Here you can <br />
                        only view the existing entries from the database. The text boxes are static and  <br />
                        cannot be modified.
                    </li><br />
                    <li>The 'Search' page is meant to dynamically load search results by Book Title. <br />
                        It works, however, it currently prints search results into the browser    <br />
                        console. For some reason when the state of the parent component changes, <br />
                        it does not trigger the mapping function to re-run, which is then supposed to <br />
                        render the list of results.
                    </li><br />
                </ol>
            </h3>
        )
    }
}

export default Instrucions;