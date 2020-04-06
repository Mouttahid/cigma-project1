import React from 'react';
import { Typography, Container, CssBaseline } from '@material-ui/core';
import Image from 'material-ui-image';

export default class Single extends React.Component{
componentDidMount(){
  document.title = this.props.location.state.title;
}
render(){

    const { location} = this.props;

    return(
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
      <Typography variant="h2" align="center" component='h1'>{location.state.title}</Typography>
       <Image src={location.state.image} />
       <Typography dangerouslySetInnerHTML={{__html: location.state.content}} />
      </Container>
    </React.Fragment>
       
      
    )
}
}

