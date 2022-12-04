import { useState, useEffect } from "react";
import Image from 'next/image';

const Projects = () => {
  const [ projects, setProjects ] = useState();
  const [ categorySelected, setCategorySelected ] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/projects')
    .then((response) => response.json())
    .then((data) => setProjects(data));
  }, []);
  
  

  return (
    <div id="projects">
      <div className="row">
        <div className="col-12">
          <div className="section-heading page-heading">
            <p>Showcasing some of my best work</p>
            <h2>Projects</h2>
            <div className='animated-bar'></div>
          </div>
        </div>
      </div>
      {/* <!-- Projects section--> */}
      <div className="projects-section single-section">
        <div className="row">
          {/* <!-- Filter nav--> */}
          <div className="col-12">
            <ul className="list-inline filter-control" role="group" aria-label="Filter-control">
              <li 
                className={ categorySelected === null ? "list-inline-item tab-active" : "list-inline-item"}
                onClick={() => setCategorySelected(null)}
              >All</li>
              <li 
                className={ categorySelected === "ecommerce" ? "list-inline-item tab-active" : "list-inline-item" }
                onClick={() => setCategorySelected("ecommerce")}
              >E-commerce</li>
              <li 
                className={ categorySelected === "social" ? "list-inline-item tab-active" : "list-inline-item" }
                onClick={() => setCategorySelected("social")}
              >Social</li>
              <li 
                className={ categorySelected === "blog" ? "list-inline-item tab-active" : "list-inline-item" }
                onClick={() => setCategorySelected("blog")}
              >Blog</li>
            </ul>
          </div>
        </div>
        {/* <!-- Projects list--> */}
        <div className="projects-grid row">
          {
            projects && projects.map((project) => {
              if (project.category === categorySelected && categorySelected !== null) {
                return (
                  <div className="single-item col-12 col-md-6 col-lg-4" key={project._id}>
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
                  </div>
              )} else if (categorySelected === null) {
                return(
                  <div className="single-item col-12 col-md-6 col-lg-4" key={project._id}>
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
                  </div>
              )}
              return null;
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projects;