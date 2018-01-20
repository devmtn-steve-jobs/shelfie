import React, {Component} from "react";
import './NavBar.css';
import logo from './logo.png';

export default class NavBar extends Component {
    render() {
        return (
            <div className="Background">
                <img src={logo} alt=""/>
            </div>
        )
    }

}