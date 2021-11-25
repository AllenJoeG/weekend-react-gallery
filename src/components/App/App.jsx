import Axios from 'axios';
import React from 'react';
import './App.css';

function App() {

  //AXIOS routes

  //GET /gallery
  const fetchImages = () => {

    Axios.get('/gallery', {

    }).then((response) => {

    }).catch((error) => {
      
    })
  }


  //POST
  

  //PUT

  //DELETE


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
