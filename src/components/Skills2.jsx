import '../css/skill2.css'

const Skills2 = () => {
    const skills = {
        frontEnd: [
          { percentage: 90, name: "HTML"},
          { percentage: 80, name: "CSS"},
          { percentage: 50, name: "JavaScript"},
          { percentage: 50, name: "React JS"},
          { percentage: 50, name: "Bootstrap"}
        ],
        backEnd: [
          { percentage: 0, name: "Node JS"},
          { percentage: 0, name: "Express JS"},
          { percentage: 30,name: "Python"},
          { percentage: 0, name: "MongoDB"},
          { percentage: 60,name: "MySQL"}
        ]
      };    
    const ProgressBarL = ({name,percentage}) => {
      return (
        <div className="progress-containerL">
            <p>{name} <span>{percentage}%</span></p>
            <div className="progress-barL">
                <div className="progressL" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
      )
    };

  return (
    <div className="skill2-container">
        <h1><span>My </span>Skills</h1>
        <div className='skills-container2'>
            <div className='f-end'>
                <h3>Front-End</h3>
                <div className='f-container'>
                    {skills.frontEnd.map((skill, index) => (
                        <ProgressBarL key={index} name={skill.name} percentage={skill.percentage}/>
                    ))}
                </div>
            </div>
            <div className='b-end'>
                <h3>Back-End</h3>
                <div className='b-container'>
                    {skills.backEnd.map((skill, index) => (
                        <ProgressBarL key={index} name={skill.name} percentage={skill.percentage}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills2