import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './ViewInventory.css'

class ViewInventory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            price: "",
            imageURL: "",
            isEditing: false,
            binID: ""
        }


    }

    componentDidMount() {
        let binID = window.location.href.split("/")[window.location.href.split("/").length-1];
        //let binID = "A1";
        axios.get(`http://localhost:5000/api/bin/${binID}`)
            .then((resp) => {
                let bin = resp.data[0]
                this.setState({
                    name: bin.name,
                    price: bin.price,
                    imageURL: bin.image_url,
                    binID: binID
                })
            })

    }

    handleName(e) {
        //console.log(e)
        this.setState({
            name: e.target.value
        })
    }

    handlePrice(e) {
        //console.log(e)
        this.setState({
            price: e.target.value
        })
    }

    handleEdit(e) {
        //console.log(e)
        if (this.state.isEditing) {
            axios.put(`http://localhost:5000/api/bin/${this.state.binID}`, {
                "name": this.state.name,
                "price": this.state.price.replace("$", ""),
                "url": "https://cdn.pixabay.com/photo/2013/04/06/11/50/image-editing-101040_960_720.jpg"
            })
                .then((resp) => {
                    let bin = resp.data[0];
                    this.setState({
                        name: bin.name,
                        price: bin.price,
                        imageURL: bin.image_url,
                        isEditing: false
                    })
                })
        }
        else {
            this.setState({
                isEditing: true
            })
        }
    }

    handleDelete(e) {
        //console.log(e)

        axios.delete(`http://localhost:5000/api/bin/${this.state.binID}`)
            .then((resp) => {
                let bin = resp.data[0];
                this.setState({
                    name: "",
                    price: "",
                    imageURL: "",
                    isEditing: false
                })
            })


    }

    render() {
        let imageBG = {
            backgroundImage: `url(${this.state.imageURL})`
        }
        return (
            <div className='invContainer'>
                <div className="leftContainer">
                    <div className="thumb" style={imageBG}></div>
                </div>
                <div className="rightContainer">
                    <h5>Name</h5>
                    <input onChange={(e) => {
                        this.handleName(e)
                    }} type="text" placeholder="Name" value={this.state.name}
                           disabled={this.state.isEditing ? false : true}/>
                    <h5>Price</h5>
                    <input onChange={(e) => {
                        this.handlePrice(e)
                    }} type="text" value={this.state.price}
                           disabled={this.state.isEditing ? false : true}/>
                    <div className="buttonsContainer">
                        <button onClick={(e) => {
                            this.handleEdit(e)
                        }}
                                className={this.state.isEditing ? "invButton save" : "invButton"}>{this.state.isEditing ? 'Save' : 'Edit'}</button>
                        <button onClick={(e) => {
                            this.handleDelete(e)
                        }} className="invButton">Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewInventory;