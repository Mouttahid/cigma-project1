import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import {Route,Switch} from "react-router-dom";
import Home from "../Home";
import Single from "../Single";


export default function Album() {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/blog" component={Single} exact/>
     
      </Switch>
       
      </main>
    
            <Footer />
    </React.Fragment>
  );
}
