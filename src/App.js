import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NotFound from './pages/NotFound';
import Contact from "./pages/Contact";
import Navigation from "./pages/Navigation";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" Component={Home}/>
                <Route path="/portfolio" Component={Portfolio}/>
                <Route path="/Contact" Component={Contact}/>
                <Route path="*" Component={NotFound}/>
            </Routes>
            <Navigation/>
        </Router>
    )
}
export default App;