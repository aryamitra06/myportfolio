import React from 'react'
import '../WorkExperience/WorkExperience.css'
function WorkExperience() {
    return (
        <>
            <div className='projects-title'>Work Experience.</div>
            <div className="work-parent">
                <div className="work-divider"></div>
                <div className="work-body">
                    <p className="work-name">Full Stack Developer</p>
                    <p className="work-place">Remote (2020)</p>
                    <p className="work-degree">E-commerce for selling art & crafts</p>
                </div>
                <div className="work-divider"></div>
                <div className="work-body">
                    <p className="work-name">Volunteer</p>
                    <p className="work-place">NSS, Shubh Foundation, YRC KIIT (2019 - current)</p>
                    <p className="work-degree">working as a volunteer cum photographer</p>
                </div>
                <div className="work-divider"></div>
                <div className="work-body">
                    <p className="work-name">Photographer, Vocal Artist & Video Editor</p>
                    <p className="work-place">TPH, Kairabh, Kolorob, K-KUBE, Kodachrome</p>
                    <p className="work-degree">Cultural societies in KIIT</p>
                </div>
                <div className="work-divider"></div>
            </div>
        </>
    )
}

export default WorkExperience