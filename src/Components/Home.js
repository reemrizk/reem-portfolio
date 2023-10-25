import React from 'react'
import Socials from './Socials';
import '../Home.css';
import About from './About';


function Home() {
  return (

    //div for entier homepage
    <div className='home' >

        <div className='intro'>
            <h1>hi, my name is Reem</h1>

            {/* short summary  */}
            <div className='prompt'>
             <p>I’m a software engineer based in Michigan. 
                I have  a great 
                interest in full-stack development, game development, 
                and cloud computing. Always looking to learn and experience new things.</p>




            </div> 

            <Socials />

        </div>
        <div className='about'>
          <About />
        </div>



      {/* //bigger about page; includes skills and education */}

    </div>
  )
}

export default Home
