import React from "react";
import {
     Divider,
     List,
     ListItem,
     ListItemIcon,
     ListItemText,
     Toolbar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { listItems } from "../lib/constant";
import { GroupAdd } from "@material-ui/icons";

const listStyle = {
     width: "90%",
     textAlign: "center",
     marginTop: "5px",
};

const divStyle = {
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     alignItems: "center",
     width: "250px",
};

const toolbarStyle = {
     textAlgin: "center",
     fontWeight: "700",
};

const Navigation = (props) => {

     return (
          <div style={divStyle}>
               <Toolbar style={toolbarStyle}>
                    <h2>Algorithms</h2>
               </Toolbar>
               <div
                    style={{ width: "200px", backgroundColor: "#f50057", height: "5px" }}
               />
               <List component="nav" style={listStyle}>
                    {listItems.map((item) => {
                         return (
                              <ListItem
                                   button
                                   component={Link}
                                   to={item.url}
                                   selected={props.selectedListIndex === item.key}
                                   key={item.key}
                                   onClick={(e) => props.setSelectedListIndex(item.key)}
                              >
                                   <ListItemIcon>{item.component}</ListItemIcon>
                                   <ListItemText primary={item.text} />
                              </ListItem>
                         );
                    })}
               </List>
               <Divider variant="middle" />
               <List style={listStyle}>
                    <ListItem
                         button
                         component={Link}
                         to="developers"
                         selected={props.selectedListIndex === 7}
                         key={0}
                         onClick={(e) => props.setSelectedListIndex(7)}
                    >
                         <ListItemIcon>
                              <GroupAdd />
                         </ListItemIcon>
                         <ListItemText primary="Developers" />
                    </ListItem>
               </List>
          </div>
     );
};

export default Navigation;
