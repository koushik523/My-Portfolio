import { Helmet } from 'react-helmet';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { MdPhone } from "react-icons/md";
import '../css/home.css';

const Home = () => {
  const handleDownload = () => {
    // The file URL can be either a public URL or a URL from the public folder
    const fileUrl = "myfile.pdf";
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'myfile.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div className='container'>
      <Helmet>
        <title>Kousigaraj | Emerging Full Stack Developer</title>
        <meta name="description" content="Kousigaraj's Portfolio - Emerging Full Stack Developer showcasing projects, skills, and experience in Full Stack Development." />
      </Helmet>
      <div className='child-container'>
        <div className="typing-animation">
          <span className="typed-text">Hi, I'm Kousigaraj</span>
        </div>
        <h2>Emerging Full Stack Developer</h2>
        <p>
          A passionate student of B.E. in Computer Science and Engineering. 
          As an emerging Full Stack Developer, I'm dedicated to creating seamless and efficient web applications. 
          Currently, I'm honing my skills in both front-end and back-end development, 
          striving to build innovative solutions that make a difference.
        </p>
        <ul className='icons'>
          <li><a href='https://wa.me/919790665826' target="_blank" rel="noopener noreferrer"><MdPhone /></a></li>
          <li><a href='mailto:kousigaraj77@gmail.com' target="_blank" rel="noopener noreferrer"><GoMail /></a></li>
          <li><a href='https://www.linkedin.com/in/kousigaraj/' target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
          <li><a href='https://github.com/Kousigaraj' target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
        </ul>
        <button className='downloadcv' onClick={handleDownload}>Download Resume</button>
      </div>
      <div className='img-container'>
        <img className='desk-top-img' src="profile_picture.jpg" alt="profile-picture" />
      </div>
    </div> 
  )
}

export default Home