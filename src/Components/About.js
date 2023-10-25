import React from 'react'
import "../App.css";
import myImage from './piss.jpg'; 

function About() {
  return (
    <div className='about'>

    <h2>/ about me</h2>
      <div className='container'>
      <div className='about-text'>
      
      <p>I graduated from Wayne State University with a 
      BS in Computer Science, and am actively seeking entry-level 
      opportunities to grow and enhance my career. </p>

      <p>
      <h4>Technologies and languages I am familiar with: </h4>
      <div className='fuck'>
      <ul>
        <li>C++</li>
        <li>Python</li>
        <li>SQL</li>
      </ul>

      <ul>
        <li>React.js</li>
        <li>HTML + CSS</li>
        <li>JavaScript</li>
      </ul>
      </div>


      <br />
      </p>
      <p>
    In my free time, I love to experiment with new technologies,
    strength-training, and
    exploring local parks.
        
      </p>



      </div>

      {/* /*insert image */ }
      <div className='image'>
      <img src={myImage} alt="My Image" />

      </div>
     


</div>
      {/* </div> //container div end */}




    </div>
  )
}

export default About
