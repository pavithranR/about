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
          <h2>Hello World;</h2>
          <p>
          I am a masters graduate based in Sydney, and I worked as a .NET developer in India for 3 years. Currently, I am practising data science. I majorly focus on the backend and DevOps. Also, I can backtrack the front end glitches and fix them. I have used react, express js for this portfolio. My interest in web apps led me to act as a full-stack developer for the past years.
<br></br><br></br>
My experience and versatile skills help me solve tricky code puzzles. Please use the contact form to know more about me.
          </p>

        </div>
      </div>
   </div>
  );
}
