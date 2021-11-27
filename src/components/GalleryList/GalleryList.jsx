import React from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

// import Button from '@mui/material/Button';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

function GalleryList({gallery, likeImage}) {



//Function Base Mode
  return (
    <div className="galleryDiv">
      {/* <h2>Hello</h2> */}
      
      {gallery.map((picture) => {
        return <GalleryItem 
                key={picture.id}
                picture={picture}
                likeImage={likeImage}
                />
      })}
      
    </div>
  );
};

export default GalleryList;