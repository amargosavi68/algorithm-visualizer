import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";

const radioGroupStyle = {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center'
}

const OperationChoice = (props) => {
     const { value, setValue } = props;

     const handleRadioChange = (name) => {
          setValue(name)
     }

     const RadioButtons = () => {
          const { pathname } = window.location;

          switch (pathname) {
               case "/array":
                    return (
                         <div style={radioGroupStyle}>
                              <RadioGroup row name="operation" value={value}>
                                   <FormControlLabel
                                        value="Insert"
                                        control={<Radio />}
                                        label="Insert"
                                        labelPlacement="end"
                                        onChange={(e) => handleRadioChange("Insert")}
                                   />
                                   <FormControlLabel
                                        value="Update"
                                        control={<Radio />}
                                        label="Update"
                                        labelPlacement="end"
                                        onChange={(e) => handleRadioChange("Update")}
                                   />
                                   <FormControlLabel
                                        value="Search"
                                        control={<Radio />}
                                        label="Search"
                                        labelPlacement="end"
                                        onChange={(e) => handleRadioChange("Search")}
                                   />
                                   <FormControlLabel
                                        value="Delete"
                                        control={<Radio />}
                                        label="Delete"
                                        labelPlacement="end"
                                        onChange={(e) => handleRadioChange("Delete")}
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
