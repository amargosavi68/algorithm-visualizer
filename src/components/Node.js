import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { motion } from 'framer-motion';

const nodeStyle = {
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     justifyContent: "center",
     height: "70px",
     minWidth: "70px",
     padding: "10px",
     border: "1px solid #000",
};

const searchNodeStyle = {
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     justifyContent: "center",
     height: "70px",
     minWidth: "70px",
     padding: "10px",
     border: "1px solid #000",
     backgroundColor: '#daff00'
};

function Node(props) {
     return (
          <motion.div layout initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}}>
          <Grid
               style={props.searchIndex ? searchNodeStyle  : nodeStyle}
               item
               xs={12}
               sm={12}
               lg={1}
          >
               <Grid item xs={9} sm={9}>
                    <Typography variant="h4">{props.data}</Typography>
               </Grid>
               <Typography variant="h5">{props.index}</Typography>
          </Grid>
          </motion.div>
     );
}

export default Node;
