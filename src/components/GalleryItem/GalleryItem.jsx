import React, {useState} from 'react';
import { render } from 'react-dom';
import './GalleryItem.css';


const GalleryItem = ({picture}) => {
  const [toggle, setToggle] = useState(true)


  const flipToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  const toggleImageDesc = () => {
    if (toggle) {
      return <img
              onClick={flipToggle}
              key={picture.id}
              src={picture.path}
            />
    } else {
      return <p onClick={flipToggle}>{picture.description}</p>
    };
  };

  return (
    <div>
      <div className='imageDiv'>
        {toggleImageDesc()}
      </div>
      
      <button>Love it!</button>
      <p> {picture.likes} people love this!</p>
    </div>
  );
};

export default GalleryItem;