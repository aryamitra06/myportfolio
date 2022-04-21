import React from 'react'

function Project(props) {
    return (
        <>
            <div className="project-body">
                <div className="project-body-child-1"><p>{props.title}</p><a href={props.link} target="_blank"><i className="fab fa-github"></i></a></div>
                <div className="project-body-child-2">
                    <p>{props.tags}</p>
                </div>
                <div className="project-body-child-3">
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default Project