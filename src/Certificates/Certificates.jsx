import React from 'react'
import '../Certificates/Certificates.css'
function Certificates() {
  return (
    <>
    <div className='projects-title'>Certificates.</div>
    <div className="certificates-parent">
        <div className="certificate-body">
            <div className="certificate-title">Foundations of User Experience (UX) Design</div>
            <div className="certificate-desc">Offered by Google on Coursera <p>07/2021</p></div>
        </div>
        <div className="certificate-body">
            <div className="certificate-title">Problem Solving (Basic + Intermediate)</div>
            <div className="certificate-desc">Offered by HackerRank <p>09/2021</p></div>
        </div>
        <div className="certificate-body">
            <div className="certificate-title">The Complete Web Development Bootcamp</div>
            <div className="certificate-desc">Offered by Udemy <p>08/2021</p></div>
        </div>
    </div>
    </>
  )
}

export default Certificates