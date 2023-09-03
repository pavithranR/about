import React from 'react';
import "./contact.scss";
import Axios from 'axios';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import Alert from '@material-ui/lab/Alert';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

//import TimelineDot from '@material-ui/lab/TimelineDot';
// import Card from '@material-ui/core/Card';
 
// import CardContent from '@material-ui/core/CardContent';
 
// import Typography from '@material-ui/core/Typography';

// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import MailIcon from '@material-ui/icons/Mail';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

class ContactPage extends React.Component {
  
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          email: '',
          message: '',
          disabled: false,
          emailSent: null,
      }
  }


  handleChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
          [name]: value
      })
  }


  handleSubmit = (event) => {
      event.preventDefault();

      //console.log(event.target);

      this.setState({
          disabled: true
      });

      Axios.post('https://prserver5.herokuapp.com/api/email', this.state)
          .then(res => {
              if(res.data.success) {
                  this.setState({
                      disabled: false,
                      emailSent: true
                  });
              } else {
                  this.setState({
                      disabled: false,
                      emailSent: false
                  });
              }
          })
          .catch(err => {
              console.log(err);

              this.setState({
                  disabled: false,
                  emailSent: false
              });
          })

  }


  render() {
      return(
        <div className="contact" id="contact">
      <div className="left">
      <img src="assets/doodle1.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>  
        
        <form onSubmit={this.handleSubmit}>
          <input id="full-name" name="name" type="text" value={this.state.name} placeholder="Name" onChange={this.handleChange} />
          <input id="email" name="email" type="email" value={this.state.email} placeholder="Mail id" onChange={this.handleChange} />
          
          <textarea  id="message" name="message" as="textarea"rows="3" value={this.state.message} placeholder="Message" onChange={this.handleChange} ></textarea>
          <button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>Send</button>
          {this.state.emailSent === true && 
        //   <p className="d-inline success-msg">Email Sent</p>
        <Alert variant="filled" severity="success">
        Your message sent!
      </Alert>
          }
        {this.state.emailSent === false && 
        // <p className="d-inline err-msg">Email Not Sent</p>
        <Alert variant="filled" severity="error">
        Message not sent. Please try LinkedIn!
      </Alert>
    }
        </form>
        
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button><a href="https://www.linkedin.com/in/pavithranrajasekaran/" target="example" rel="noopener">
         
            <LinkedInIcon color="primary"/>
        </a>
        </Button>
        <Button>
            <a href="https://github.com/pavithranR" target="example" rel="noopener">
            <GitHubIcon/>
        </a></Button>
      </ButtonGroup>
    </div>
    </div> 
    );
  }
}

export default ContactPage;


 