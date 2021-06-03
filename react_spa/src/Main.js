import React, {Component} from "react"
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom"
import Home from "./Home"
import Stuff from "./Stuff"
import Contact from "./Contact"

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink to="/stuff">Main</NavLink></li>
                        <li><NavLink to="/stuff">Products</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Main