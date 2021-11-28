import React from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

function GalleryList({gallery, likeImage}) {



//Function Base Mode
  return (
    <Box 
      sx={{ flexGrow: 1 }} 
      className="galleryDiv"
      padding="5px"
    >  
      
      {gallery.map((picture) => {
        return <GalleryItem 
                key={picture.id}
                picture={picture}
                likeImage={likeImage}
                />
      })}
      
    </Box>
  );
};

export default GalleryList;