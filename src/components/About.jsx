import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import '../css/about.css';


const About = () => {

  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  

  return (
    <div className='about'>
      <Helmet>
        <title>Kousigaraj | Emerging Full Stack Developer</title>
        <meta name="description" content="Kousigaraj's Portfolio - Emerging Full Stack Developer showcasing projects, skills, and experience in Full Stack Development." />
      </Helmet>
    
      <div className={`about-text ${isReadMore ? 'expanded' : ''}`}>
        <h1>About <span>Me</span></h1>
        <p>
          I'm  a B.E. Computer Science and Engineering student with a keen interest in Full Stack Development. 
          I am on a continuous journey to evolve as an Emerging Full Stack Developer, 
          constantly expanding my knowledge and skill set to keep pace with the ever-evolving tech industry.
        </p>
        <p>
        I am actively seeking internship opportunities to gain practical experience and further develop my skills in a professional setting. 
        As an intern, I am eager to contribute to real-world projects, 
        learn from experienced professionals, and bring fresh ideas to the team. 
        </p>
        {isReadMore && (
          <>
            <p>
              I thrive on turning ideas into powerful solutions that make a difference. 
              From crafting elegant front-end interfaces to designing robust back-end architectures, 
              my passion lies in creating seamless experiences that users love. 
              With a blend of creativity and technical expertise, I am dedicated to pushing boundaries and embracing new challenges.
            </p>
            <p>
              My vision is to become a proficient full stack developer who can contribute to innovative projects and solve real-world problems through technology. 
              I am committed to continuous learning and improvement, 
              aiming to stay at the forefront of the tech industry.
              I am ready to work hard, adapt to new challenges, and grow as a developer.
            </p>
          </>
        )}
        <button className='read-more-btn' onClick={toggleReadMore}>
          <span style={{paddingRight: '10px'}}>{isReadMore ? 'Show Less' : 'Read More'}</span>
          {isReadMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
    </div>
  )
}

export default About