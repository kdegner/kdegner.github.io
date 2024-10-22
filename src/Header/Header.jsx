
import NavLink from "./NavLink";

const changeTheme = (e) => {
    const body = document.getElementById("body");
    const header = document.getElementById("header");
    const icons = document.getElementsByClassName("bi");

    if (e.target.checked) {
        body.setAttribute("bs-data-theme", "light");
        body.classList.remove("bg-dark");
        body.classList.add("bg-light");
        header.classList.remove("bg-dark");
        header.classList.add("bg-light");

        for(let icon of icons) {
            icon.classList.remove("text-light");
            icon.classList.add("text-dark");
        }

    } else {
        body.setAttribute("bs-data-theme", "dark");
        body.classList.remove("bg-light");
        body.classList.add("bg-dark");
        header.classList.remove("bg-light");
        header.classList.add("bg-dark");

        for(let icon of icons) {
            icon.classList.remove("text-dark");
            icon.classList.add("text-light");
        }
    }
}

const Header = () => {

    return (
        <nav id={"header"} className={"HolyGrail-header nav bg-dark"}>
            <div className={"nav-header"}>
                <h4 className={"text"}><span className={"green"}>&lt;</span>Kadie Degner<span className={"green"}>/&gt;</span></h4>
            </div>
            <ul className={"nav-list"}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/projects"}>Projects</NavLink>
                <NavLink to={"/resume"}>Resume</NavLink>

                <div className={"toggle-switch"}>
                    <label className={"switch-label"}>
                        <input onChange={changeTheme} type={"checkbox"} className={"checkbox"}/>
                        <span className={"slider"}></span>
                    </label>
                </div>
            </ul>
        </nav>
    );
}

export default Header;