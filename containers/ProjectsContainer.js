import { motion } from "framer-motion";
import Projects from "../components/Sections/Projects/Projects";

const ProjectsContainer = ({ projects, categorySelected }) => {
    return (
        <motion.div layout className="projects-grid row">
            <Projects projects={projects} categorySelected={categorySelected} />
        </motion.div>
    )
}

export default ProjectsContainer