import React from 'react';
import "./about.scss";

export default function About() {
  
  return (
    <div className="about" id="aboutId" > 
    <div className="left">
        <div className="imgContainer">
          <img src="assets/pr.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi!</h2>
          <p>
          I’m a software developer with 4+ years of experience specializing in backend development, SCADA systems, and data-driven applications. My work focuses on building reliable systems using .NET and modern web technologies, while exploring data science and AI solutions to solve real-world problems. 
          
          <br></br><br></br>I enjoy working across the stack when needed and continuously improving systems through automation and smart engineering.
          </p>

        </div>
      </div>
   </div>
  );
}
