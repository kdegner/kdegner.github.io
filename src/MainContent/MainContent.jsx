import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import { Route, Routes } from "react-router-dom";


const MainContent = (props) => {


    return (
        <div id={"grid"} className="HolyGrail-content">
        <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/about"} element={<About />}></Route>
            <Route path={"/projects"} element={<Projects projects={props.projects} />}></Route>
            <Route path={"/resume"} element={<Resume />}></Route>
        </Routes>
        </div>
    );
}

export default MainContent;