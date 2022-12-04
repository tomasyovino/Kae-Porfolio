import connectDB from "../config";
import Projects from "../models/Project";

class ProjectsDAO {

    async listAll() {
        try {
            await connectDB();

            const elements = await Projects.find().lean();;
            
            return elements;
        } catch (error) {
            console.log(error);
        };
    };
};

export default ProjectsDAO;