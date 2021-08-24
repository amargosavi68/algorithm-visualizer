import React, { useState } from "react";
import OperationChoice from "./OperationChoice";
import "../css/Array.css";
import { Button, Card } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Node from "./Node";

const Array = (props) => {
     const [option, setOption] = useState("Insert");

     const [data, setData] = useState("");
     const [array, setArray] = useState([]);
     const [index, setIndex] = useState("");

     const [message, setMessage] = useState(null);


     const handleOnchange = (e) => {
          if (e.target.name === "data") {
               setData(e.target.value);
          } else {
               setIndex(e.target.value);
          }
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          if (option === "Insert") {
               array.push(data);
               setArray(array);
               setMessage("Data inserted Successfully");
          }
          else if (option === "Update") {
               if (array.length > index) {
                    array[index] = data;
                    setMessage("Data updated successfully");
               } else {
                    setMessage("Please provide a valid index");
               }
          }
          else if(option === "Search") {
               let flag = 0;
               for(let i = 0; i < array.length; i++) {
                    if (array[i] === data) {
                         flag = 1
                         setMessage(`Data found at index ${i}`)
                         break;
                    }
               }
               if (flag === 0) {
                    setMessage("Data is not in the array");
               }
          }
          else {
               if (array.length) {
                    const arr = array.filter((value) => value !== data);
                    setArray(arr);
                    setMessage(`Data is removed from index ${index}`);
               }
               else {
                    setMessage("Array is empty. Please fill the array with some elements");
               }
          }
          
          setData("");
          setIndex("");          
          setTimeout(() => {
               setMessage(null);
          }, 3000);
     };

     const getForm = (option) => {
          switch (option) {
               case "Insert":
                    return (
                         <form noValidate className="array__form">
                              <TextField
                                   className="form__data-field"
                                   variant="outlined"
                                   name="data"
                                   value={data}
                                   label="Enter the Value"
                                   onChange={handleOnchange}
                                   required
                              />
                              <Button
                                   type="submit"
                                   variant="outlined"
                                   color="secondary"
                                   onClick={handleSubmit}
                                   disabled={data === ""}
                              >
                                   Insert
                              </Button>
                         </form>
                    );

               case "Update":
                    return (
                         <form noValidate className="array__form">
                              <TextField
                                   className="form__index-field"
                                   variant="outlined"
                                   type="number"
                                   name="index"
                                   value={index}
                                   label="Enter the Index"
                                   onChange={handleOnchange}
                                   required
                              />
                              <TextField
                                   className="form__data-field"
                                   variant="outlined"
                                   name="data"
                                   value={data}
                                   label="Enter New Value"
                                   onChange={handleOnchange}
                                   required
                              />
                              <Button
                                   type="submit"
                                   variant="outlined"
                                   color="secondary"
                                   onClick={handleSubmit}
                                   disabled={index === "" || data === ""}
                              >
                                   Update
                              </Button>
                         </form>
                    );
                    
               case "Search": 
               return (
                    <form noValidate className="array__form">
                         <TextField
                              className="form__data-field"
                              variant="outlined"
                              name="data"
                              value={data}
                              label="Enter Search Value"
                              onChange={handleOnchange}
                              required
                         />
                         <Button
                              type="submit"
                              variant="outlined"
                              color="secondary"
                              onClick={handleSubmit}
                              disabled={data === ""}
                         >
                              Search
                         </Button>
                    </form>
               );

               case "Delete":
                    return (
                         <form noValidate className="array__form">
                              <TextField
                                   className="form__data-field"
                                   variant="outlined"
                                   type="number"
                                   name="index"
                                   value={index}
                                   label="Enter the Index"
                                   onChange={handleOnchange}
                                   required
                              />
                              <Button
                                   type="submit"
                                   variant="outlined"
                                   color="secondary"
                                   onClick={handleSubmit}
                                   disabled={index === ""}
                              >
                                   Delete
                              </Button>
                         </form>
                    );
               default:
                    return null;
          }
     };

     return (
          <div>
               <div className="message">
                    {message && <Alert onClose={() => setMessage(null)}>{message}</Alert>}
               </div>
               <Card className="array">
                    <h2>Choose the Operation</h2>
                    <OperationChoice
                         option={option}
                         setOption={(option) => setOption(option)}
                    />
                    {getForm(option)}
               </Card>
               <Card className="visualization">
                    <h2>Visualization</h2>
                    <div className="array__nodes">
                         {array.map((data, index) => <Node key={index} index={index} data={data} />)}
                    </div>
               </Card>
          </div>
     );
};

export default Array;
