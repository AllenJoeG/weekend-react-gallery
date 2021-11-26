import React from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({gallery, likeImage}) {

  return (
    <ul>
      <h2>Hello</h2>
      
      {gallery.map((picture) => {
        return <GalleryItem 
                key={picture.id}
                picture={picture}
                likeImage={likeImage}
                />
      })}
      
    </ul>
  );
};

export default GalleryList;