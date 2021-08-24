import { Typography, Grid } from "@material-ui/core";
import React from "react";

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

function Node(props) {
     return (
          <Grid
               style={nodeStyle}
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
     );
}

export default Node;
