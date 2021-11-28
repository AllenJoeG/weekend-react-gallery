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

  //returning BOX GRID ITEM structure
  //MUI Item definition
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box >
      <Grid 
        
        container
        spacing={{ xs: 2, sm: 2, md: 16, lg: 16 }} 
        columns={{ xs: 4, sm: 8, md: 12, lg: 12}}>

        <Grid 
          item xs={2} md={12} lg={12}
          
        >
          <Item 
            className="imgDescItem"
            onClick={flipToggle}
          >
            {toggleImageDesc()}
          </Item>

          <Item >
            <p><Button variant="contained" onClick={onLoveClick}>
              Give Us the Heart Eyes
            </Button> 😍 {picture.likes} 😍</p>
          </Item>

        </Grid>
      </Grid>
    </Box>
    
  );
};


//Functioning Base Mode
//   return (
//     <div className="gallItemDiv">
//       <div className='imageDiv'>
//         {toggleImageDesc()}
//       </div>
      
//       <Button variant="contained" onClick={onLoveClick}>Love it!</Button>
//       <p> {picture.likes} people love this!</p>
//     </div>
//   )
// }
export default GalleryItem;