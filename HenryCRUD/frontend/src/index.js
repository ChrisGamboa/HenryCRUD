import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home/Home';
import Books from './components/Books/Books';
import Authors from './components/Authors/Authors';
import Publishers from './components/Publishers/Publishers';
import Copies from './components/Copies/Copies';
import Branches from './components/Branches/Branches';
import Inventory from './components/Inventory/Inventory';
import Wrote from './components/Wrote/Wrote';
import Search from './components/Search';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import './index.css'

ReactDOM.render(
    (<><Router>
        <div>
        <Route path={""} component={Root} />
        <Route path={"/home"} component={Home} />
        <Route path={"/books"} component={Books} />
        <Route path={"/authors"} component={Authors} />
        <Route path={"/publishers"} component={Publishers} />
        <Route path={"/copies"} component={Copies} />
        <Route path={"/branches"} component={Branches} />
        <Route path={"/inventory"} component={Inventory} />
        <Route path={"/wrote"} component={Wrote} />
        <Route path={"/search"} component={Search} />
        </div>
    </Router></>),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
