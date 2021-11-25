import React from 'react';
import { render } from 'react-dom';
import './GalleryItem.css';


const GalleryItem = ({picture}) => {

  return (
    <div>
      
      <img
        key={picture.id}
        src={picture.path}
      />
        
    </div>
  );
};

export default GalleryItem;