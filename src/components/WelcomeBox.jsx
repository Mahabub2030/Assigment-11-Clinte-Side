import React from 'react'
import './WelcomeBox.css'
import { TypeAnimation } from 'react-type-animation';

function WelcomeBox() {
  return (
    <div className='welcome-box'>
    
      <TypeAnimation className='welcome-title welcome-box'
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'We produce food for Mice',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'WELCOME TO LIBRARY',
          1000,
          'WELCOME TO LIBRARY',
          1000,
          'WELCOME TO LIBRARY',
          1000
        ]}
        wrapper="span"
        speed={50}
        
        style={{ fontSize: '2em', display: 'inline-block'  }}
        repeat={Infinity}
      />
      <p className='welcome-message'>Feed Your Brain<br />
        <span className='welcome-submessage'>Grab A Book To Read</span></p>
    </div>
  )
}

export default WelcomeBox
