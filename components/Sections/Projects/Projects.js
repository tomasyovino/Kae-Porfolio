import Image from 'next/image';
import { motion } from "framer-motion";
import Loading from '../../Loader';

const Projects = ({ projects, categorySelected, projectsUrl }) => {
  const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
          opacity: 1,
          scale: 1,
          transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2
          }
      }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className='container row'
    >
      {
        projects ? projects.slice().reverse().map((project) => {
          if (project.category === categorySelected && categorySelected !== null) {
            return (
              <motion.div
                variants={item}
                className="single-item col-12 col-md-6 col-lg-4" 
                key={project._id}
              >
                <div className="project-wrapper">
                  <Image src={project.image} className="img-fluid" width={370} height={395} />
                  <div className="item-content">
                    <h6>{project.name}</h6>
                    <div>
                      <a href={project.repoUrl} target="_blank" rel="noreferrer">{projectsUrl.repository}</a>
                      <a href={project.webUrl} target="_blank" rel="noreferrer">{projectsUrl.webPage}</a>
                    </div>
                  </div>
                </div>
              </motion.div>
          )} else if (categorySelected === null) {
            return(
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="single-item col-12 col-md-6 col-lg-4" 
                key={project._id}
              >
                <div className="project-wrapper">
                  <Image src={project.image} className="img-fluid" width={370} height={395} />
                  <div className="item-content">
                    <h6>{project.name}</h6>
                    <div>
                      <a href={project.repoUrl} target="_blank" rel="noreferrer">{projectsUrl.repository}</a>
                      <a href={project.webUrl} target="_blank" rel="noreferrer">{projectsUrl.webPage}</a>
                    </div>
                  </div>
                </div>
              </motion.div>
          )}
          return null;
        }) : <Loading />
      }
    </motion.div>
  )
}

export default Projects;