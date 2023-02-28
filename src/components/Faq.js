import React,{useEffect} from 'react'
import '../styles/Faq.css'
import Aos from "aos"
import "aos/dist/aos.css"


function Faq() {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <div className='faq'>
        <div>
            <strong>Find the answers <span>to your questions</span></strong>
        </div>
        <ul>
          <li data-aos="fade-left">What can I validate?</li>
          <li data-aos="fade-left">What can i enrich my leads with?</li>
          <li data-aos="fade-left">Is it fast?</li>
          <li data-aos="fade-left">How is onboarding, do i have to do everything myself?</li>
          <li data-aos="fade-left">Do you cover me 24/7?</li>
          <li data-aos="fade-left">Will you replace all my manual interview processes?</li>
          <li data-aos="fade-left">Are there limits to those i can interview?</li>
          <li data-aos="fade-left">Which department in a company typically uses Intervid?</li>
        </ul>
    </div>
  )
}

export default Faq