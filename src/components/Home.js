import { Card, CardContent } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { listItems } from "../lib/constant";
import "../css/Home.css";

const Home = (props) => {
     return (
          <div className="home__cards">
               {listItems.map((item, index) => {
                    return (
                         <Card
                              key={index}
                              component={Link}
                              to={item.url}
                              className="home__card"
                         >
                              <CardContent>
                                   <h2>{item.text}</h2>
                              </CardContent>
                         </Card>
                    );
               })}
          </div>
     );
};

export default Home;
