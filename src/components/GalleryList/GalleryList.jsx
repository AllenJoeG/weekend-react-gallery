import React from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({gallery}) {
  return (
    <ul>
      <h2>Hello</h2>
      {/* {snacks.map((snack) => {
        return <SnackItem snack={snack}/>
      })} */}
      <GalleryItem gallery={gallery} />
    </ul>
  )
}

export default GalleryList;