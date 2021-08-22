import React, { useState } from 'react'
import OperationChoice from './OperationChoice';

const Array = (props) => {

     const [value, setValue] = useState("Insert");

     return (
          <div>
               <OperationChoice value={value} setValue={(e) => setValue(e.target.value)} />
               <h3>Array is here</h3>
          </div>
     )
}

export default Array;
