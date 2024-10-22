import ProjectGrid from "./ProjectGrid";

const Projects = (props) => {
    return (
        <div className={"projects"}>
            <h1 className={"title"}>My Projects</h1>
            <ProjectGrid projects={props.projects} />
        </div>
    );
}

export default Projects;