import Axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';

function App() {

  //useEffect 'on load'
  useEffect(() => {
    fetchImages();
  }, []);
  
  //AXIOS routes

  //GET /gallery
  const fetchImages = () => {

    Axios.get('/gallery', {

    }).then((response) => {
      console.log(galleryItems);
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
