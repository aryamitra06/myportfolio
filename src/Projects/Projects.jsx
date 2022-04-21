import React from 'react'
import '../Projects/Projects.css'
import { useState, useEffect } from 'react'
import { getAllProjects } from '../API/api'
import Project from './Project';

function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllProjects();
            setProjects(data);
        }
        fetchData();
    }, []);

    console.log(projects);
    return (
        <>
            <div className='projects-title'>Projects.</div>
            <div className="project-parent">
            {projects.map(project => (
                <>
                <Project title={project.title} description={project.description} tags={project.tags} link={project.link}/>
                </>
            ))}
            </div>
        </>
    )
}

export default Projects