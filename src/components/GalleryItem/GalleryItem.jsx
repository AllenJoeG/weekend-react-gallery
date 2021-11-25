import React from 'react';
import { render } from 'react-dom';
import './GalleryItem.css';


const GalleryItem = ({picture}) => {
  let toggle = true;

  const flipToggle = () => {
    if (toggle) {
      toggle = false;
    } else {
      toggle = true;
    }
  }

  const toggleImageDesc = () => {
    if (toggle) {
      return <img
              key={picture.id}
              src={picture.path}
            />
    } else {
      return <p>{picture.description}</p>
    };
  };

  return (
    <div>
      <div className='imageDiv'>
        {toggleImageDesc()};
      </div>
      
      <button>Love it!</button>
      <p> {picture.likes} people love this!</p>
    </div>
  );
};

export default GalleryItem;