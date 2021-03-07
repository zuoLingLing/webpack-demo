import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todo from './Todo';
import "@/App.less";
import "./index.less"
function App() {
    return (
        <Router>
            <Link to="/todo" className="divBox"><h1>进入Todo</h1></Link>
            <Route path="/todo" component={Todo}></Route>
            <img src="./assets/leaf.png"/>
        </Router>
    )
}
export default App;