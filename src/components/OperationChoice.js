import { FormControlLabel, Radio, RadioGroup, Grid } from "@material-ui/core";
import React from "react";

const radioGroupStyle = {
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     alignItems: "center",
     marginLeft: "20px",
};

const OperationChoice = (props) => {
     const { option, setOption } = props;

     const handleRadioChange = (name) => {
          setOption(name);
     };

     const RadioButtons = () => {
          const { pathname } = window.location;

          switch (pathname) {
               case "/array":
                    return (
                         <div style={radioGroupStyle}>
                              <RadioGroup row name="operation" value={option}>
                                   <Grid item xs={6} sm={6} md={6} lg={3}>
                                        <FormControlLabel
                                             value="Insert"
                                             control={<Radio />}
                                             label="Insert"
                                             labelPlacement="end"
                                             onChange={(e) => handleRadioChange("Insert")}
                                        />
                                   </Grid>
                                   <Grid item xs={6} sm={6} md={6} lg={3}>
                                        <FormControlLabel
                                             value="Update"
                                             control={<Radio />}
                                             label="Update"
                                             labelPlacement="end"
                                             onChange={(e) => handleRadioChange("Update")}
                                        />
                                   </Grid>
                                   <Grid item xs={6} sm={6} md={6} lg={3}>
                                        <FormControlLabel
                                             value="Search"
                                             control={<Radio />}
                                             label="Search"
                                             labelPlacement="end"
                                             onChange={(e) => handleRadioChange("Search")}
                                        />
                                   </Grid>
                                   <Grid item xs={6} sm={6} md={6} lg={3}>
                                        <FormControlLabel
                                             value="Delete"
                                             control={<Radio />}
                                             label="Delete"
                                             labelPlacement="end"
                                             onChange={(e) => handleRadioChange("Delete")}
                                        />
                                   </Grid>
                              </RadioGroup>
                         </div>
                    );

               default:
                    break;
          }
     };

     return RadioButtons();
};

export default OperationChoice;
