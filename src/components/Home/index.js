import Cards from "../card/Cards";
import Container from "@material-ui/core/Container";
import React, { useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles'
export default () => {

 const useStyles = makeStyles(theme => ({
        icon: {
          marginRight: theme.spacing(2)
        },
        cardGrid: {
          paddingTop: theme.spacing(8),
          paddingBottom: theme.spacing(8),
          textAlign: "center"
        },
        
        cardMedia: {
          paddingTop: "56.25%"
        },
        cardContent: {
          flexGrow: 1
        }
      }));
const classes = useStyles();
useEffect( ()=>{
  document.title = "Home";
},[]);

return (
<Container className={classes.cardGrid} maxWidth="md" >
<Cards />
</Container>  
)
    }
