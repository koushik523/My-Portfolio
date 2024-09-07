
const SkillCard = ({ percentage = 0, image, name, alt }) => {
  // Get screen width
  const screenWidth = window.innerWidth;

  // Define responsive values based on screen width
  let radius, stroke, fontSize;
  
  if (screenWidth <= 600) {
    radius = 35;
    stroke = 5;
    fontSize = '12px';
  } else {
    radius = 50;
    stroke = 8;
    fontSize = '16px';
  }

  const normalizedRadius = radius - stroke * 2.2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="card">
      <img src={image} alt={alt || 'Skill Image'} />
      <p>{name}</p>
      <div className="progress-bar">
        <svg
          height={radius * 2}
          width={radius * 2}
        >
          <circle
            stroke="#e6e6e6"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#1dc8a6"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            transform={`rotate(-90 ${radius} ${radius})`}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            fontSize={fontSize}
            fill="white"
          >
            {`${percentage}%`}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default SkillCard;
