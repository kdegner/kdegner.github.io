import ImageSlideshow from "./ImageSlideshow";

const Project = (props) => {

    const skillsElement = [];

    props.skills.forEach((skill) => {
        skillsElement.push(<span className="badge">{skill}</span>);
    });

    return (
        <div id={"card"} className="card">
            <div className="card-body">
                <h3 className="card-title">{props.name}</h3>
                <h5 className={"card-subtitle"}>{props.type}</h5>
                <h5 className={"card-year"}>{props.year}</h5>
                <ImageSlideshow images={props.images} id={props.id} />
                <div className="card-text">
                    {props.description}
                </div>
            </div>
            <div className={"footer"}>
                <div>{skillsElement}</div>
                <a href={props.link} className={"link animate-underline"}>{props.linkDescription}</a>
            </div>
        </div>
    );
}

export default Project;