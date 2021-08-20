import { Container, Grid } from "@material-ui/core";
import React from "react";
import { devlopersInfo } from "../lib/constant";
import DeveloperCard from "./DeveloperCard";

const Developers = () => {
     return (
          <React.Fragment>
               <Container>
                    <Grid container>
                         {devlopersInfo.map((developer) => {
                              return (
                                   <Grid key={developer.name} item xs={12} sm={9} md={6} lg={3}>
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
