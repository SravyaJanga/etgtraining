import React from "react";
import { Route, Link, BrowserRouter as Router,Switch, Routes } from "react-router-dom";
import Contact from "./RouterComponent/Contact";
import App from "./App";
import Notfound from "./RouterComponent/NotFound";
import AboutUs from './RouterComponent/AboutUs';

const routing=(
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact"></Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            </div>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Notfound />} />
            </Routes>
    </Router>
)
export default routing;
