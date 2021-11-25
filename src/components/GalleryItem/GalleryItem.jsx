import React from 'react';
import { render } from 'react-dom';
import './GalleryItem.css';


const GalleryItem = ({gallery}) => {

  return (
    <div>
      <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
    </div>
  )
}

export default GalleryItem;