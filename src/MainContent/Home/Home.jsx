import headshot from "./headshot-nobackground.png";
import NavLink from "../../Header/NavLink";

const Home = () => {

    return (
        <div className={"home"}>
            <div className={"home-top"}>
                <div className={"home-left"}>
                    <h2 className={"home-subtitle"}>Hello, I'm</h2>
                    <h1 className={"home-name"}>Kadie Degner.</h1>
                    <h4 className={"home-overview"}>I'm a software engineering
                        student at<br/>the Milwaukee School of Engineering.</h4>
                </div>
                <div className={"home-right"}>
                    <img className={"image"} src={headshot} alt={"Photo of Kadie Degner"} />
                </div>
            </div>
            <NavLink to={"/projects"} className={"home-projects animate-underline"}><h2>See My Projects<i className="bi bi-arrow-right"></i></h2></NavLink>
        </div>
    );
}

export default Home;