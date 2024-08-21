import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import a from '../../assets/a.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={a} alt="" className='portfoli-image'/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Passionate Frontend Developer student with a solid foundation in HTML, CSS, and JavaScript.</p>
                    <p>Eager to apply knowledge of modern frameworks like React  to create engaging and responsive web applications.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:"30%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
                <div className="about-achievement">
                    <h1>0</h1>
                    <p>Yeras experience</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Projects Completed</p>
            </div>
        </div>
    </div>
  )
}

export default About
