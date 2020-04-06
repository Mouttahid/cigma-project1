import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
export default () => {
   
    
    const useStyles = makeStyles(theme => ({
        icon: {
          marginRight: theme.spacing(2),
          
        },
        navTitle: {
         
          display:"inline",
          
        },
        link: {
          color: "white",
          textDecoration:"none"
        }
        
       
    })
    );
    const classes = useStyles();
    

return    (<AppBar position="relative">
        <Toolbar>
          <Link to="/" className={classes.link}><MenuBookIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap className={classes.navTitle}>
            Mouttahid's Blog
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
)

}