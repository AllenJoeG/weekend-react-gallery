import React from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

import Button from '@mui/material/Button';

function GalleryList({gallery, likeImage}) {

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