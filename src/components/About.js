import React,{useEffect} from 'react';
import '../styles/About.css';
import barchat from '../assets/Ico/bar-chart.png'
import delegate from '../assets/Ico/delegate.png'
import interview from '../assets/Ico/interview.png'
import onInterview from '../assets/Ico/online-interview.png'
import Aos from "aos"
import "aos/dist/aos.css"


function About() {
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
  return (
    <div className='about'>   
        <div>
            <strong>The power<span> of InterVid </span></strong>
            <p>intergrate traffic sources, apply state of the art data cleansing algorithms, and automate manual processes. Intervid creates measurable and improved intervieing sets on sall your lead-to-sale activities</p>
        </div>
        <section className='about__card-section'>
            <div  data-aos="flip-right">
                <img src={barchat} alt="barchat"/>
                <p>intergrate traffic sources, apply state of the art data cleansing algorithms, and automate manual processes.</p>
            </div>
            <div data-aos="flip-left">
            <img src={delegate} alt="elegate"/>
                <p>InterVid allows you make interview with multiple candidates at anytime, with different or same interview questions</p>
            </div>
            <div data-aos="flip-right"> 
            <img src={interview} alt="interview"/>
                <p>Accessibility to great chat system thal allows real-time chat with potential employees</p>
            </div>
            <div data-aos="flip-left">
            <img src={onInterview} alt="onInterview"/>
                <p>Our videochat system allows job seekers make video to answer every interview questions and gives back the feedback to the jobseeker and employer </p>
            </div>
           
        </section>
    </div>
  )
}

export default About