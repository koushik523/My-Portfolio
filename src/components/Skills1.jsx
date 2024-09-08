import React, { useState } from 'react';
import '../css/skills1.css';
import SkillCard from './SkillCard';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Skills1 = () => {
  const [currentFrontEndPage, setCurrentFrontEndPage] = useState(0);
  const [currentBackEndPage, setCurrentBackEndPage] = useState(0);
  const itemsPerPageDesktop = 4;
  const itemsPerPageTablet = 3;
  const itemsPerPageMobile = 2;

  const skills = {
    frontEnd: [
      { percentage: 90, image: "/assets/html-logo.png", name: "HTML", alt: "html-logo" },
      { percentage: 80, image: "/css-logo.svg", name: "CSS", alt: "css-logo" },
      { percentage: 50, image: "/javaScript-logo.svg", name: "JavaScript", alt: "javaScript-logo" },
      { percentage: 50, image: "/react.svg", name: "React JS", alt: "react-logo" },
      { percentage: 50, image: "/bootstrap-logo.svg", name: "Bootstrap", alt: "bootstrap-logo" }
    ],
    backEnd: [
      { percentage: 0, image: "/nodejs-logo.svg", name: "Node JS", alt: "nodejs-logo" },
      { percentage: 0, image: "/expressjs-logo.svg", name: "Express JS", alt: "expressjs-logo" },
      { percentage: 30, image: "/python-logo.svg", name: "Python", alt: "python-logo" },
      { percentage: 0, image: "/mongodb-logo.svg", name: "MongoDB", alt: "mongodb-logo" },
      { percentage: 60, image: "/mysql-logo.svg", name: "MySQL", alt: "mysql-logo" }
    ]
  };

  const itemsPerPage = window.innerWidth <= 768 ? itemsPerPageMobile: window.innerWidth <= 1024 ? itemsPerPageTablet : itemsPerPageDesktop;

  const handleFrontEndNext = () => {
    if ((currentFrontEndPage + 1) * itemsPerPage < skills.frontEnd.length) {
      setCurrentFrontEndPage(prevPage => prevPage + 1);
    }
  };

  const handleFrontEndPrev = () => {
    if (currentFrontEndPage > 0) {
      setCurrentFrontEndPage(prevPage => prevPage - 1);
    }
  };

  const handleBackEndNext = () => {
    if ((currentBackEndPage + 1) * itemsPerPage < skills.backEnd.length) {
      setCurrentBackEndPage(prevPage => prevPage + 1);
    }
  };

  const handleBackEndPrev = () => {
    if (currentBackEndPage > 0) {
      setCurrentBackEndPage(prevPage => prevPage - 1);
    }
  };

  const getCurrentItems = (skillsArray, currentPage) => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return skillsArray.slice(start, end);
  };

  const isLastPageFrontEnd = (currentFrontEndPage + 1) * itemsPerPage >= skills.frontEnd.length;
  const isLastPageBackEnd = (currentBackEndPage + 1) * itemsPerPage >= skills.backEnd.length;

  return (
    <div className='skills'>
      <h1><span>My </span>Skills</h1>
      <h2>Front-End</h2>
      <div className='front-end'>
        {getCurrentItems(skills.frontEnd, currentFrontEndPage).map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
      <div className='current-page'>
        Page {currentFrontEndPage + 1} of {Math.ceil(skills.frontEnd.length / itemsPerPage)}
      </div>
      <div className="pagination-buttons" style={{ justifyContent: currentFrontEndPage > 0 ? 'space-between' : 'flex-end' }}>
        {currentFrontEndPage > 0 && <button onClick={handleFrontEndPrev}><FaArrowLeft /><span>Previous</span></button>}
        {getCurrentItems(skills.frontEnd, currentFrontEndPage).length > 0 && (
          <button onClick={handleFrontEndNext} style={{ display: !isLastPageFrontEnd ? 'inline-block' : 'none' }}><span>Next</span><FaArrowRight /></button>
        )}
      </div>
      <h2>Back-End</h2>
      <div className='back-end'>
        {getCurrentItems(skills.backEnd, currentBackEndPage).map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
      <div className='current-page'>
        Page {currentBackEndPage + 1} of {Math.ceil(skills.backEnd.length / itemsPerPage)}
      </div>
      <div className="pagination-buttons" style={{ justifyContent: currentBackEndPage > 0 ? 'space-between' : 'flex-end' }}>
        {currentBackEndPage > 0 && <button onClick={handleBackEndPrev}><FaArrowLeft /><span>Previous</span></button>}
        {getCurrentItems(skills.backEnd, currentBackEndPage).length > 0 && (
          <button  onClick={handleBackEndNext} style={{ display: !isLastPageBackEnd ? 'inline-block' : 'none' }}><span>Next</span><FaArrowRight /></button>
        )}
      </div>
    </div>
  );
}

export default Skills1;
