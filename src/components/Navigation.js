import React, { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@material-ui/core";
import { listItems } from "../lib/constant";

const listStyle = {
     width: "250px",
     textAlign: "center",
};

const divStyle = {
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     alignItems: "center",
};

const toolbarStyle = {
     width: '100%',
     backgroundColor: '#f50057',
     textAlgin: 'center',
     color: "#fff",
     fontWeight: '600',
     paddingLeft: '100px'
}

const Navigation = (props) => {

     return (
          <div style={divStyle}>
               <Toolbar style={toolbarStyle}>
                    <Typography variant="h5" >Algorithms</Typography>
               </Toolbar>
               <List component="nav" style={listStyle}>
                    {listItems.map((item) => {
                         return (
                              <ListItem
                                   button
                                   selected={props.selectedListIndex === item.key}
                                   key={item.key}
                                   onClick={(e) => props.setSelectedListIndex(item.key)}
                              >
                                   <ListItemIcon>
                                        {item.component}
                                   </ListItemIcon>
                                   <ListItemText primary={item.text} />
                              </ListItem>
                         );
                    })}
               </List>
          </div>
     );
};

export default Navigation;
