import React from 'react'
import '../Hero/Hero.css'
import displaypicture from "../Assets/dp.jpg";
function Hero() {
  return (
    <>
      <div className="hero-main-body container-fluid">
        <div className="row hero-body d-flex align-items-center">
          <div className="hero-child-1 col-md-6 col-sm-12 d-flex align-items-center justify-content-end">
            <img src={displaypicture} alt="display" />
          </div>
          <div className="hero-body-child-2 col-md-6 col-sm-12 d-flex align-items-center justify-content-start">
            <div>
              <p className="title">Aryamitra Chaudhuri</p>
              <p className="slogan">Full Stack Developer</p>
              <p className="para">Prospective computer science engineer, passionate coder. I make random things, mostly in JavaScript, Java and Python.</p>
              <div className="social">
              <a href="https://drive.google.com/drive/folders/1fzi235LjseWIcUPcyTIeMXnqZ0pVQFnJ?usp=sharing" target="_blank"><span>View Resume</span></a>
              <a href="https://in.linkedin.com/in/aryamitrachaudhuri" target="_blank"><span><i className="fab fa-linkedin"></i></span></a>
              <a href="https://github.com/aryamitra06" target="_blank"><span><i className="fab fa-github"></i></span></a>
              <a href="https://twitter.com/beingaryamitra" target="_blank"><span><i className="fab fa-twitter"></i></span></a>
              <a href="https://facebook.com/caryamitra" target="_blank"><span><i className="fab fa-facebook"></i></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero