import { Schema, model, models } from "mongoose";

const projectSchema = new Schema({
    name: {type: String, required: true, max: 100},
    description: {type: String, required: true},
    image: {type: String, required: true},
    webUrl: {type: String, required: true},
    repoUrl: {type: String, required: true},
});

const Projects = models.Projects || model("Projects", projectSchema)

export default Projects;