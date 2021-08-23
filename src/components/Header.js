import React, { useState } from "react";
import {
     AppBar,
     Toolbar,
     Typography,
     IconButton,
     Drawer,
} from "@material-ui/core";
import { Menu, GitHub } from "@material-ui/icons";
import Navigation from "./Navigation";
import '../css/Header.css';


const Header = (props) => {

     const [toggle, setToggle] = useState(false);
     const [selectedListIndex, setSelectedListIndex] = useState(0);

     const toggleDrawer = () => {
          setToggle(!toggle);
     };
     
     const setIndex = (key) => {
          toggleDrawer();
          setSelectedListIndex(key)
     }

     return (
          <div className="header">
               <AppBar color="secondary" position="static">
                    <Toolbar variant="dense">
                         <IconButton
                              className="header__icon"
                              edge="start"
                              color="inherit"
                              aria-label="menu"
                              onClick={() => toggleDrawer()}
                         >
                              <Menu />
                         </IconButton>
                         <Drawer anchor="left" open={toggle} onClose={() => toggleDrawer()}>
                              <Navigation
                                   selectedListIndex={selectedListIndex}
                                   setSelectedListIndex={(key) => setIndex(key)}
                              />
                         </Drawer>
                         <Typography className="header__name" variant="h5" color="inherit">
                              Algorithm Visualizer
                         </Typography>
                         <IconButton
                              className="header__icon"
                              edge="end"
                              color="inherit"
                              aria-label="menu"
                         >
                              <GitHub />
                         </IconButton>
                    </Toolbar>
               </AppBar>
          </div>
     );
};

export default Header;
