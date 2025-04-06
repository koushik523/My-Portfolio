import '../css/education.css';

const Education = () => {
  return (
    <div className="education">
      <h1><span>My </span>Education</h1>

      <div className="timeline">

        <div className="education-card">
          <div className="timeline-dot" />
          <img src="kitecollege.jpg" alt="Kite-logo" />
          <div className="edu-content">
            <h2>2023 - 2026</h2>
            <h3>KGISL Institute of Technology</h3>
            <p>B.E. Computer Science and Engineering</p>
            <p className="cgpa">CGPA: 8.1</p>
          </div>
        </div>

        <div className="education-card">
          <div className="timeline-dot" />
          <img src="spclogo.png" alt="School-logo" />
          <div className="edu-content">
            <h2>2020 - 2022</h2>
            <h3>Sakthi Polytechnic College</h3>
            <p>Diploma</p>
            <p className="cgpa">Percentage: 96%</p>
          </div>
        </div>

        <div className="education-card">
          <div className="timeline-dot" />
          <img src="school.png" alt="School-logo" />
          <div className="edu-content">
            <h2>2018 - 2020</h2>
            <h3>Government Model Higher Secondary School</h3>
            <p>HSC - State Board</p>
            <p className="cgpa">Percentage: 63%</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
