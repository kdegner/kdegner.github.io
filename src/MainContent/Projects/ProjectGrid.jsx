import Project from "./Project";

const ProjectGrid = (props) => {

    const projects = props.projects;

    let projectGridElement = [];
    projects.forEach((project) => {
        projectGridElement.push(<Project name={project.name} skills={project.skills}
                                         description={project.description} images={project.images}
                                         year={project.year} type={project.type} id={project.id}
                                         link={project.link} linkDescription={project.linkDescription}/>);
    });

    return (<div id={"projects"} className={"project-grid"}>{projectGridElement}</div>);
}

export default ProjectGrid;