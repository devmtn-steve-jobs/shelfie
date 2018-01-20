import React, { Component } from 'react';
import axios from 'axios';
import './BinList.css';

export default class BinList extends Component {

   constructor(){
       super();
       this.state = {
           bins: []
       };
   }

   componentDidMount() {
       console.log(this.props);
       console.log(this.props.match);
       axios.get(`/api/shelf/A`)
           .then( res => {
               console.log(res.data);
               this.setState({bins: res.data});
           })
           .catch( err => console.log(err));
   }

   render() {
       const bins = this.state.bins.map( bin => {
           return (
             <div key={ this.state.bins.indexOf(bin) } >
               <h3>{ bin ? `Bin ${bin.bin_id}` : `+ Add inventory to bin` }</h3>
             </div>
           )
         });


       return (
           <div>
               { bins }
           </div>
       );
   }
}