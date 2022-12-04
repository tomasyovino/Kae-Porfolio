import { getProjectsController } from "../../api/controller/projects.controller"

export default async function handler(req, res) {
    let products = await getProjectsController();
    res.status(200).send(products);
};