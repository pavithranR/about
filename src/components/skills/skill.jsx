import "./skill.scss";

import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
  
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 8,
    width: '90%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
      <LinearProgress variant="buffer" value={props.value} valueBuffer={props.value + 5} />
    </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}


export default function Skill() {
  const classes = useStyles();
  const [progress1] = React.useState(90);
  const [progress2] = React.useState(70);
  const [progress3] = React.useState(80);
  const [progress4] = React.useState(75);
  const [progress5] = React.useState(60);

  return (
    <div className="skillbanner" id="skill">
      <h1>Skills</h1>
      <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}><p>.NET/ .NET Core and C#</p><LinearProgressWithLabel value={progress1} />
       </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}><p>Python, data science libraries</p><LinearProgressWithLabel value={progress4} />
          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item xs={8}>
          <Paper className={classes.paper}><p>SQL and NoSQL</p><LinearProgressWithLabel value={progress3} /></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><p>API</p><LinearProgressWithLabel value={progress1} /></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}><p>Azure</p><LinearProgressWithLabel value={progress3} /></Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}><p>MERN Stack</p><LinearProgressWithLabel value={progress5} /></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><p>GIT</p><LinearProgressWithLabel value={progress1} /></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs>
          <Paper className={classes.paper}><p>HTML, JS</p><LinearProgressWithLabel value={progress4} /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><p>Machine Learning</p><LinearProgressWithLabel value={progress2} /></Paper>
        </Grid>
      </Grid>
    </div>
        
         
    </div>
    
  );
  
}
