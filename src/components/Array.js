import React, { useState } from "react";
import OperationChoice from "./OperationChoice";
import "../css/Array.css";
import { Button, Card } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const Array = (props) => {
  const [value, setValue] = useState("Insert");
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
    array.push(data);
    setData("");
    setIndex("");
    setArray(array);
    setMessage("Data inserted Successfully..")
    setTimeout(() => {
         setMessage(null);
    }, 5000)
  };

  const getForm = (value) => {
    switch (value) {
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

      default:
        return null;
    }
  };

  return (
    <div>
         {message && <span>{message}</span>}
      <Card className="array">
        <h3>Choose the Operation</h3>
        <OperationChoice value={value} setValue={(value) => setValue(value)} />
        {getForm(value)}
      </Card>
      <Card>
        <h2>{array.map((el) => el + " ")}</h2>
      </Card>
    </div>
  );
};

export default Array;
