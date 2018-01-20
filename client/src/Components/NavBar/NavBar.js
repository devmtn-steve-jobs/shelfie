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
            // Shelf and Bin Selected
            if (this.props.currentShelf && this.props.currentBin) {
                return (
                    <div className="HomeBackground">
                        <img src={logo} alt="" className="HomeImage" />
                        <h1 className='Title' >SHELFIE</h1>
                    </div>
                )
                // Shelf selected
            } else if (this.props.currentShelf) {
                return (
                    <div className="HomeBackground">
                        <div>
                            <img src={logo} alt="" className="IconHomeButton" />
                            {/* <h1 className='Title' >{this.props.currentShelf}</h1> */}

                        </div>
                        <div className="ShelfNavTitle">
                            {this.props.currentShelf}
                        </div>
                    </div>
                )
                // No shelf selected
            } else {
                return (
                    <div className="HomeBackground">
                        <img src={logo} alt="" className="HomeImage" />
                        <h1 className='Title' >SHELFIE</h1>
                    </div>
                )
            }
        }
    }
}