import React from 'react'
import '../Education/Education.css'
function Education() {
  return (
    <>
      <div className='projects-title'>Education.</div>
      <div className="education-parent">
      <div className="education-divider"></div>
        <div className="education-body">
          <p className="institute-name">KIIT University (2019 - '23)</p>
          <p className="institute-place">Odisha</p>
          <p className="institute-degree">B. Tech. in Computer Science</p>
        </div>
        <div className="education-divider"></div>
        <div className="education-body">
          <p className="institute-name">Ramnagar Rao HS (2012 - '19)</p>
          <p className="institute-place">West Bengal</p>
          <p className="institute-degree">10th and 12th</p>
        </div>
        <div className="education-divider"></div>
      </div>
    </>
  )
}

export default Education