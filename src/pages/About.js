import React from 'react'
import { Link } from "react-router-dom";

function About () {
    return (
        <div>
            <div className="container main-container col-12 col-md-10 offset-md-1 clear-fix">  
                <div className="row">
                    <div className="col-12 col-md-12 m-2">
                    <h1 className="border-bottom border-secondary" >About</h1>
                    {/* <!-- sub row --> */}
                    <div className="row">
                        <div className="col-md-12 col-12 pr-4 text-justify">
                            <h2 className="text-center">Full Stack Web Developer</h2>
                            <img className="photo mt-0 mr-3 mb-3 float-left" src="assets/images/edHeadShot.png" alt="My mugshot"/>
                            I am a full stack developer with a broad range of software development experience. I really enjoy learning new things. I have recently graduating from the UW coding bootcamp where I have been honing my web development skills in javascript, and the MERN stack.
                            <br/>
                            <br/>
                            My last position was with a health care service organization.  My business unit supported a tobacco cessation program.  I worked as a software developer on the customer relationship management system that support the cessation program. The program was primarily driven through phone based coaching and online learning. I am deeply grateful for having been part of a business that impacted so many lives.
                            <br/>
                            <br/>
                            I live in the charming community of Brier, Washington north of Seattle, near the top of lake Washington. I can juggle and ride a unicycle, but not at the same time. I am passionate about staying in shape with hiking and cycling. I organize hikes for my friends and family. I am an above average rec room ping pong player. 
                            <br/>
                            <br/>
                            Here is a link to my Github repositories: <a href="https://github.com/edfeld?tab=repositories" target="_blank" rel="noopener noreferrer">Github. &nbsp;&nbsp;&nbsp; </a>
                        
                            Visit my profile page on <a href="https://www.linkedin.com/in/edeinfeld/" target="_blank" rel="noopener noreferrer">LinkedIn.&nbsp;&nbsp;&nbsp;</a>
    
                            Checkout my <Link to="/portfolio">portfolio page.</Link>
                        </div>
                    </div>        
                    </div>
                </div>
             </div>  {/*container*/}
        </div>
    )
}

export default About