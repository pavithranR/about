import React from 'react';
import "./timePR.scss";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import SchoolIcon from '@material-ui/icons/School';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function TimelinePR() {
  const classes = useStyles();

  return (
    <div className="intro" id="timelinePR" > 
    <Timeline align="alternate">
    <TimelineItem>
        <TimelineOppositeContent>
         
        </TimelineOppositeContent>
        <TimelineSeparator>
        <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" component="h1">
             Timeline
            </Typography>
         </Paper>
        </TimelineSeparator>
        <TimelineContent>
      
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Feb 2020 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <Paper elevation={3} className={classes.paper}> */}
            <Typography variant="h6" component="h1">
              Masters at UOW
            </Typography>
            <Typography>Practising ML, Azure and DevOps</Typography>
          {/* </Paper> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            July 2020 - Sep 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <Paper elevation={3} className={classes.paper}> */}
            <Typography variant="h6" component="h1">
              Intern at AI Australia
            </Typography>
            <Typography>Sharepoint developer</Typography>
          {/* </Paper> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Apr 2019 - Feb 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          {/* <Paper elevation={3} className={classes.paper}> */}
            <Typography variant="h6" component="h1">
              Larsen &amp; Toubro 
            </Typography>
            <Typography>System Analyst</Typography>
          {/* </Paper> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Sep 2016 - Apr 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <Paper elevation={3} className={classes.paper}> */}
            <Typography variant="h6" component="h1">
              Karya Technologies
            </Typography>
            <Typography>Programmer Analyst</Typography>
          {/* </Paper> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            July 2016 - Aug 2016
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <MenuBookIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          {/* <Paper elevation={3} className={classes.paper}> */}
            <Typography variant="h6" component="h1">
              Intern at Karya Technologies
            </Typography>
            <Typography>Trained on MVC</Typography>
          {/* </Paper> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Jan 2016 - Mar 2016
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <MenuBookIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <Paper elevation={3} className={classes.paper}> */}
            <Typography variant="h6" component="h1">
              Undergraduate project
            </Typography>
            <Typography>At ISRO, Trivandrum</Typography>
          {/* </Paper> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Aug 2012 - Apr 2016
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          {/* <Paper elevation={3} className={classes.paper}> */}
            <Typography variant="h6" component="h1">
              B.Tech
            </Typography>
            <Typography>Information Technology</Typography>
          {/* </Paper> */}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}
