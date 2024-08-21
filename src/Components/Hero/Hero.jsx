import React from 'react'
import './Hero.css'
import a from '../../assets/a.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero'>
       <img src={a} alt="" className='portfolio-image' />
       <h1><span>I'm Pappala Archana</span>,want to become a Frontend Developer.</h1>
       <p>Passionate Frontend Developer student with a solid foundation in HTML, CSS, and JavaScript. Eager to apply knowledge of modern frameworks like React  to create engaging and responsive web applications.</p>
       <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me</AnchorLink></div>
        <div className="hero-resume"><a href="src\assets\ARCHANA.pdf" download="My_Resume.pdf">My Resume</a></div>
       </div>
    </div>
  )
}

export default Hero
