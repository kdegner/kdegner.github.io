import IconLink from "./IconLink";


const Footer = () => {

    return (
        <div className="HolyGrail-footer footer">
            <div className={"icons"}>
            <IconLink href={"https://github.com/kdegner"}>
                <i className={"bi bi-github text-light"}></i>
            </IconLink>

            <IconLink href={"https://www.linkedin.com/in/kadie-degner/"}>
                <i className={"bi bi-linkedin text-light"}></i>
            </IconLink>

            <IconLink href={"https://www.instagram.com/kadiedegner/"}>
                <i className={"bi bi-instagram text-light"}></i>
            </IconLink>
            </div>
        </div>
    );
}

export default Footer;