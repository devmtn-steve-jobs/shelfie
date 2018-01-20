import React, { Component } from "react";
import './NavBar.css';
import logo from './logo.png';

export default class NavBar extends Component {
    // constructor() {
    //     super()
    //     this.state = {

    //     }
    // }
    render() {
        {
            if (this.props.currentShelf) {
                return (
                    <div className="Background">
                        <img src={logo} alt="" />
                        <h1 className='title' >SHELFIE</h1>
                    </div>
                )
            } else if (this.props.currentShelf && this.props.currentBin) {
                return (
                    <div className="HomeBackground">
                        <img src={logo} alt="" className="HomeImage" />
                        <h1 className='HomeTitle' >SHELFIE</h1>
                    </div>
                )
            }
        }
    }
}