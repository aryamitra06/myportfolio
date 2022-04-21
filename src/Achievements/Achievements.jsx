import React from 'react'
import '../Achievements/Achievements.css'
function Achievements() {
    return (
        <>
            <div className='projects-title'>Achievements.</div>
            <div className="achievement-parent">
                <div className="achievement-divider"></div>
                <div className="achievement-body">
                    <p className="achievement-name">KAPTURE org. by KIIT Electrical engg.</p>
                    <p className="achievement-place">Odisha (2021)</p>
                    <p className="achievement-degree">Secured 1st position in street photography</p>
                </div>
                <div className="achievement-divider"></div>
                <div className="achievement-body">
                    <p className="achievement-name">District Level Science Exhibition (org. by RMSA)</p>
                    <p className="achievement-place">West Bengal (2016)</p>
                    <p className="achievement-degree">Secured 1st position among 40 schools</p>
                </div>
                <div className="achievement-divider"></div>
                <div className="achievement-body">
                    <p className="achievement-name">Silverzone International Olympiad of Mathematics</p>
                    <p className="achievement-place">West Bengal (2015)</p>
                    <p className="achievement-degree">Class topper</p>
                </div>
                <div className="achievement-divider"></div>
            </div>
        </>
    )
}

export default Achievements