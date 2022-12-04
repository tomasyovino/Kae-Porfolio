import { getProjects } from "../services/projects.services";

async function getProjectsController() {
    return await getProjects();
};

export { getProjectsController };