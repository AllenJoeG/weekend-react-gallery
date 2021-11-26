import React, {useState} from 'react';
import { render } from 'react-dom';
import './GalleryItem.css';

//Import MUI requirements
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


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

  //Implementing Image List





  //returning BOX GRID ITEM structure
  //MUI Item definition
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Item 
            className="imgDescItem"
            onClick={flipToggle}
            >
            {toggleImageDesc()}
            </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <Button variant="contained" onClick={onLoveClick}>
              Love it!
            </Button>
          </Item>
        </Grid>

        <Grid item xs={2}>
          <Item><p> {picture.likes} 😍</p></Item>
        </Grid>
      </Grid>
    </Box>
    
  );
};

{/* 
  // <div className="gallItemDiv">
  //   <div className='imageDiv'>
  //     {toggleImageDesc()}
  //   </div>
    
  //   <Button variant="contained" onClick={onLoveClick}>Love it!</Button>
  //   <p> {picture.likes} people love this!</p>
  // </div> */}

export default GalleryItem;