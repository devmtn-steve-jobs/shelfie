import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ShelfList from './Components/ShelfList/ShelfList';
import router from './routes';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentShelf: "Shelf A",
      currentBin: null
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar currentShelf={this.state.currentShelf} />
        {router}
      </div>
    );
  }
}

export default App;
