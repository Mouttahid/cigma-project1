import React, { useState,useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CardSingle from './CardSingle';
import {API} from '../../Utils/Config';
import Loader from  "../../assets/loader.gif";
export default ({title}) => {
const [cards,setCards] = useState([]);
const [hasError, setErrors] = useState(false);


useEffect(() => {
  fetch(API)
  .then((resp)=>resp.json())
  .then(
    (json)=>{ 
     
      setCards(json)}
  ).catch( (error)=> {
    setErrors(error)
  })
},[]);

    return (
      <>
       {
          cards.length < 1 && <img src={Loader} alt="loading icon"/>
      }
      <Grid container spacing={4} >
       
        { !hasError && cards.length>0 &&
          
           
            cards.map((card,index) => (
              
              <Grid item key={index} xs={12} sm={6} md={4}>
              <CardSingle
               
               title={card.title}
               content={card.content}
               image={card.featured_image} />
                </Grid>
               ))
           
        
        }
        
     
    </Grid>
    </>
    )
}