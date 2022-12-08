import { motion } from "framer-motion";
import Projects from "../components/Sections/Projects/Projects";

const ProjectsContainer = ({ projects, categorySelected, projectsUrl }) => {
    return (
        <motion.div layout className="projects-grid row">
            <Projects projects={projects} categorySelected={categorySelected} projectsUrl={projectsUrl} />
        </motion.div>
    )
}

export default ProjectsContainer