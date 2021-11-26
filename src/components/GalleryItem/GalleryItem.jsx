import React, {useState} from 'react';
import { render } from 'react-dom';
import './GalleryItem.css';


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
    
  }

  return (
    <div>
      <div className='imageDiv'>
        {toggleImageDesc()}
      </div>
      
      <button onClick={likeImage}>Love it!</button>
      <p> {picture.likes} people love this!</p>
    </div>
  );
};

export default GalleryItem;