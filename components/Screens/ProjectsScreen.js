import { useState, useEffect } from "react";
import ProjectsContainer from "../../containers/ProjectsContainer";
import Filter from "../Sections/Projects/Filter";
import SectionHeading from "../SectionHeading";

const ProjectsScreen = ({ projectsLanguage }) => {
    const [ projects, setProjects ] = useState();
    const [ categorySelected, setCategorySelected ] = useState(null);
  
    useEffect(() => {
      fetch('/api/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data));
    }, []);

    return (
        <div id="projects" className="p-4">
            <SectionHeading sectionHeading={projectsLanguage.sectionHeading} />
            <div className="projects-section single-section">
                <Filter categorySelected={categorySelected} setCategorySelected={setCategorySelected} filter={projectsLanguage.filter} />
                <ProjectsContainer projects={projects} categorySelected={categorySelected} projectsUrl={projectsLanguage.projectsUrl} />
            </div>
        </div>
    )
}

export default ProjectsScreen