import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

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
      console.log('Error fetching from server,', error)
    });
  };


  //POST
  

  //PUT
  const likeImage = (id) => {
    Axios.put(`/gallery/like/${id}`)
    .then((response) => {
      console.log('Likes updated for', id, response)
      // sendStatus(200);
      fetchImages();
    }).catch((error) => {
      console.log('error PUTting', error);
      // sendStatus(500);
    });
    
  }

  //DELETE

  //RETURN
    return (
      <Box
        backgroundColor="darkGray"
      >
        <Container maxWidth="lg">
          <header className="App-header">
            <h3 className="App-title">A first pass at Material UI</h3>
          </header>

          <GalleryList gallery={gallery} likeImage={likeImage} />
        </Container>
      </Box>
    );
};

export default App;
