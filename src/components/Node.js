import { Typography } from '@material-ui/core'
import React from 'react';

const nodeStyle = {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     height: '70px',
     minWidth: '70px',
     padding: '10px',
     border: '1px solid #000',
}

function Node(props) {
     return (
          <div style={nodeStyle}>
               <div>
                    <Typography variant="h4">{props.data}</Typography>
               </div>
               <Typography variant="h5" >{props.index}</Typography>
          </div>
     )
}

export default Node
