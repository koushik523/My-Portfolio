import '../css/education.css';

const Education = () => {
  return (
    <div className="education">
      <h1><span>My </span>Education</h1>
      <div className='education-card'>
        <img src="kitecollege.jpg" alt="Kite-logo" />
        <div className='edu-content'>
          <h2>2023-2026</h2>
          <h3>KGISL Institute of Technology</h3>
          <h3>Bachelor of Engineering in Computer Science and Engineering (B.E.CSE)</h3>
          <p>CGPA - 8.1</p>
        </div>
      </div>
    </div>
  )
}

export default Education