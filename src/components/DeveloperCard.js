import { Card, CardContent } from '@material-ui/core';
import React from 'react'

const DeveloperCard = (props) => {
     const { developer } = props;

     return (
          <Card>
               <CardContent>
                    { developer.name }
               </CardContent>
          </Card>
     )
}

export default DeveloperCard;
