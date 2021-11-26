import React, {useState} from 'react';
import { render } from 'react-dom';
import './GalleryItem.css';

import Button from '@mui/material/Button';


const GalleryItem = ({picture, likeImage}) => {
  const [toggle, setToggle] = useState(true)


  const flipToggle = () => {
    setToggle(!toggle);
  }

  const toggleImageDesc = () => {
    if (toggle) {
      return <img
              onClick={flipToggle}
              key={picture.id}
              src={picture.path}
            />
    } else {
      return <p onClick={flipToggle}>
              {picture.description}
            </p>
    };
  };

  const onLoveClick = () => {
    likeImage(picture.id)
  }

  return (
    <div className="gallItemDiv">
      <div className='imageDiv'>
        {toggleImageDesc()}
      </div>
      
      <Button variant="contained" onClick={onLoveClick}>Love it!</Button>
      <p> {picture.likes} people love this!</p>
    </div>
  );
};

export default GalleryItem;