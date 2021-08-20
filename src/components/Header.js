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

const iconStyle = {
     margin: "0px 15px 0px 5px",
};

const headerNameStyle = {
     padding: "15px 0px",
     fontWeight: "600",
     width: "90%",
};

const Header = (props) => {
     const [toggle, setToggle] = useState(false);
     const [selectedListIndex, setSelectedListIndex] = useState(0);

     const toggleDrawer = () => {
          setToggle(!toggle);
     };

     return (
          <div>
               <AppBar color="secondary" position="static">
                    <Toolbar variant="dense">
                         <IconButton
                              style={iconStyle}
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
                                   setSelectedListIndex={(key) => setSelectedListIndex(key)}
                              />
                         </Drawer>
                         <Typography style={headerNameStyle} variant="h5" color="inherit">
                              Algorithm Visualizer
                         </Typography>
                         <IconButton
                              style={iconStyle}
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
