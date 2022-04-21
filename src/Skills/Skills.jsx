import React from 'react'
import '../Skills/Skills.css'
import brandimage from '../Navbar/image.png'
function Skills() {
  return (
    <>
      <div className='skills-title'>Skills.</div>
      <div className="skills-parent">
        <div className="skills-child-1">
          <img src={brandimage} />
        </div>
        <div className="skills-child-2">
          <p className="skill-1-title">Web Development</p>
          <p className="skill-1-desc">HTML 5, CSS 3, JavaScript, MaterialUI, Bootstrap, Tailwind, ReactJS, NodeJS, Express, MongoDB, PHP, Java Servlet, SQL, Python Flask</p>
          <br />
          <p className="skill-2-title">App Development</p>
          <p className="skill-2-desc">React Native</p>
          <br />
          <p className="skill-3-title">Machine Learning</p>
          <p className="skill-3-desc">Python, scikit-learn, Seaborn, Matplotlib, TensorFlow</p>
          <br />
          <p className="skill-4-title">Programming Languages</p>
          <p className="skill-4-desc">Java(OOP), JavaScript, C, Python, PHP</p>
          <br />
          <p className="skill-5-title">UI/UX</p>
          <p className="skill-5-desc">Figma, AdobeXD</p>
        </div>
      </div>
    </>
  )
}

export default Skills