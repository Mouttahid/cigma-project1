import React from 'react';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Image from 'material-ui-image';

export default ({title,content,image}) => {
    const useStyles = makeStyles(theme=>({
        card: {
            height: "100%",
            display: "flex",
            flexDirection: "column"
          },
        cardContentText: {
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          height:"40px"
          
        },
        image: {
          height:"300px",
          width: "100%",
          objectFit: "cover",
        }



        }));
        
        const classes = useStyles();

    return(
        <Card className={classes.card}>
                  <Link to={{
                    pathname: '/blog',
                    state:{
                      title:title,
                      content:content,
                      image:"http://localhost/blog/public/storage/"+image
                    }
                  }} >
                  <Image src={"http://localhost/blog/public/storage/"+image} alt={title}/>
                  </Link>
                  <CardContent className={classes.cardContent}>
                  <Link to={{
                    pathname: '/blog',
                    state:{
                      title:title,
                      content:content,
                      image:"http://localhost/blog/public/storage/"+image
                    }
                  }} > <Typography gutterBottom variant="h6" component="h2">
                     {title}
                    </Typography>
                    </Link>
                    <Typography 
                    className={classes.cardContentText} 
                    dangerouslySetInnerHTML={{__html: content }} />
                     
                   
                  </CardContent>
                 
        </Card>
    )
}