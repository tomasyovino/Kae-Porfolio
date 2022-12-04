import ProjectsDAO from "../DAO/ProjectsDAO";

const projectsDAO = new ProjectsDAO;

async function getProjects() {
    return await projectsDAO.listAll();
};

export { getProjects };