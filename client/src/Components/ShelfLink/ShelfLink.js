import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ShelfLink.css'

class ShelfLink extends Component {
    render() {
        return (
            <div className='shelfContainer'>
                <Link id={this.props.shelfID} to={`/binlist/${this.props.shelfID}`}> 
                <h2>{`Shelf ${this.props.shelfID}`}</h2>
                </Link>
            </div>
        );
    }
}

export default ShelfLink;