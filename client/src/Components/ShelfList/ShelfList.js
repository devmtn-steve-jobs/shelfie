import React, { Component } from 'react';
import ShelfLink from '../ShelfLink/ShelfLink';
import './ShelfList.css'

class ShelfList extends Component {
    render() {
        const shelves = ['A','B','C','D'];
        const shelving=shelves.map((x,i)=>{
            return (
                <ShelfLink key={i} shelfID={x}/>
            )
        })

        return (
            <div className='shelvesContainer'>
                { shelving }
            </div>
        );
    }
}

export default ShelfList;
