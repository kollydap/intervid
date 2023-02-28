import React from 'react'
import "../styles/Header.css"
import onlineInt from "../assets/Ico/online-intervie.png"

function Header() {
  return (
    <div className='header'>
      
        <div className='nav'>
          <div></div>
            
        </div>
        <div className="flex-head">
        <div className='img'>
          <img src={onlineInt} alt="main "/>
        </div>
        <main>
            <section>
               <h1>interVid</h1> 
               <h3>Interviewing made easy</h3>
               <p>Intervid is your software platform for Intervieing management. Interview process made easier allowing you to automatically validate, collect and distribute questions, so you can keep records of every interview process. </p>
               <button>Get Started</button>
            </section>

        </main>
        </div>

    </div>
  )
}

export default Header