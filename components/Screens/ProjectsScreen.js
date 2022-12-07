import { useState, useEffect } from "react";
import ProjectsContainer from "../../containers/ProjectsContainer";
import Filter from "../Sections/Projects/Filter";
import SectionHeading from "../SectionHeading";

const ProjectsScreen = () => {
    const [ projects, setProjects ] = useState();
    const [ categorySelected, setCategorySelected ] = useState(null);
  
    useEffect(() => {
      fetch('/api/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data));
    }, []);

    return (
        <div id="projects" className="p-4">
            <SectionHeading paragraph={"Showcasing some of my best work"} subtitle={"Projects"} />
            <div className="projects-section single-section">
                <Filter categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
                <ProjectsContainer projects={projects} categorySelected={categorySelected} />
            </div>
        </div>
    )
}

export default ProjectsScreen