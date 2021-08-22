import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";

const OperationChoice = (props) => {
     const RadioButtons = () => {
          const { pathname } = window.location;
          console.log(pathname);

          switch (pathname) {
               case "/":
                    return (
                         <div>
                              <RadioGroup row name="operation" value={"Insert"}>
                                   <FormControlLabel
                                        value="Insert"
                                        control={<Radio />}
                                        label="Insert"
                                        labelPlacement="end"
                                   />
                                   <FormControlLabel
                                        value="Update"
                                        control={<Radio />}
                                        label="Update"
                                        labelPlacement="end"
                                   />
                                   <FormControlLabel
                                        value="Search"
                                        control={<Radio />}
                                        label="Search"
                                        labelPlacement="end"
                                   />
                                   <FormControlLabel
                                        value="Delete"
                                        control={<Radio />}
                                        label="Delete"
                                        labelPlacement="end"
                                   />
                              </RadioGroup>
                         </div>
                    );
               
               case '/stack':
                    return (
                         <div>
                              <RadioGroup row name="operation" value={"Push"}>
                                   <FormControlLabel
                                        value="Push"
                                        control={<Radio />}
                                        label="Push"
                                        labelPlacement="end"
                                   />
                                   <FormControlLabel
                                        value="Pop"
                                        control={<Radio />}
                                        label="Pop"
                                        labelPlacement="end"
                                   />
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
