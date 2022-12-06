import Image from 'next/image';
import { motion } from "framer-motion";

const Projects = ({ projects, categorySelected }) => {

  return (
    <>
      {
        projects ? projects.map((project) => {
          if (project.category === categorySelected && categorySelected !== null) {
            return (
              <motion.div layout className="single-item col-12 col-md-6 col-lg-4" key={project._id}>
                <div className="project-wrapper">
                  <Image src={project.image} className="img-fluid" width={370} height={395} />
                  <div className="item-content">
                    <h6>{project.name}</h6>
                    <div>
                      <a href={project.repoUrl} target="_blank" rel="noreferrer">GitHub</a>
                      <a href={project.webUrl} target="_blank" rel="noreferrer">Web Page</a>
                    </div>
                  </div>
                </div>
              </motion.div>
          )} else if (categorySelected === null) {
            return(
              <motion.div layout className="single-item col-12 col-md-6 col-lg-4" key={project._id}>
                <div className="project-wrapper">
                  <Image src={project.image} className="img-fluid" width={370} height={395} />
                  <div className="item-content">
                    <h6>{project.name}</h6>
                    <div>
                      <a href={project.repoUrl} target="_blank" rel="noreferrer">GitHub</a>
                      <a href={project.webUrl} target="_blank" rel="noreferrer">Web Page</a>
                    </div>
                  </div>
                </div>
              </motion.div>
          )}
          return null;
        }) : null
      }
    </>
  )
}

export default Projects;