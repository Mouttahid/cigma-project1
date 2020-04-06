import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";

export default () => {

  const useStyles = makeStyles(theme => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6)
    }
  }));

  const classes = useStyles();


  return (
    <div>
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        <MenuBookIcon/> Mouttahid's Blog
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
       Cigma Project by
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="https://ma.linkedin.com/in/mahdi-mouttahid-987b48157">
          Mahdi Mouttahid
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </footer>
    </div>
  );

};
