import {
     Card,
     CardContent,
     CardHeader,
     CardMedia,
     CardActions,
     Typography,
     IconButton,
     makeStyles,
} from "@material-ui/core";
import { LinkedIn, Mail, Twitter } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
     card: {
          position: "relative",
          margin: "20px 0px",
          width: "350px",
          height: "auto",
     },
     cardMedia: {
          height: 0,
          paddingTop: "56.25%",
     },
     cardAction: {
          position: "relative",
          float: "right",
     },
     linkedIn: {
          color: "#0000ff",
     },
     mail: {
          color: "#000",
     },
     twitter: {
          color: "#00ffff",
     },
     iconSize: {
          fontSize: "30px",
     },
}));

const DeveloperCard = (props) => {
     const { developer } = props;
     const classes = useStyle();

     return (
          <Card className={classes.card}>
               <CardHeader title={developer.name} subheader={developer.designation} />
               <CardMedia
                    className={classes.cardMedia}
                    title={developer.name}
                    image={developer.image}
               />
               <CardContent>
                    <Typography paragraph>{developer.description}</Typography>
               </CardContent>
               <CardActions className={classes.cardAction}>
                    <IconButton className={classes.mail}>
                         <Mail className={classes.iconSize} />
                    </IconButton>
                    <IconButton className={classes.linkedIn}>
                         <LinkedIn className={classes.iconSize} />
                    </IconButton>
                    <IconButton className={classes.twitter}>
                         <Twitter className={classes.iconSize} />
                    </IconButton>
               </CardActions>
          </Card>
     );
};

export default DeveloperCard;
