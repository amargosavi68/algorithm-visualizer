import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { devlopersInfo } from "../lib/constant";
import DeveloperCard from "./DeveloperCard";

const useStyle = makeStyles((theme) => ({
     container: {
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alginItems: "center",
          backgroundColor: "#f2f2f2",
          marginTop: "10px",
     },
     grid: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alginItems: "center",
     },
}));

const Developers = () => {
     const classes = useStyle();
     return (
          <React.Fragment>
               <Container className={classes.container}>
                    <Grid className={classes.grid}>
                         {devlopersInfo.map((developer) => {
                              return (
                                   <Grid
                                        key={developer.name}
                                        item
                                        xs={12}
                                        sm={9}
                                        md={6}
                                        className={classes.grid}
                                   >
                                        <DeveloperCard developer={developer} />
                                   </Grid>
                              );
                         })}
                    </Grid>
               </Container>
          </React.Fragment>
     );
};

export default Developers;
