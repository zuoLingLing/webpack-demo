import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todo from './Todo';
import "@/App.less"

function App() {
    return (
        <Router>
            <Link to="/todo" className="divBox">进入Todo</Link>
            <Route path="/todo" component={Todo}></Route>
        </Router>
    )
}
export default App;