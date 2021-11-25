import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {

  //useEffect 'on load'
  useEffect(() => {
    fetchImages();
  }, []);
  
  //STATE store the gallery data
  const [gallery, setGallery] = useState([])

  //AXIOS routes

  //GET /gallery
  const fetchImages = () => {

    Axios.get('/gallery', {

    }).then((response) => {
      console.log(response.data);
      setGallery(response.data);
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
        <GalleryList gallery={gallery} />
        <GalleryList gallery={gallery} />
      </div>
    );
}

export default App;
