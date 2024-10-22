import { Link, useResolvedPath, useMatch } from "react-router-dom";

const NavLink = ({to, children, ...props}) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "nav-item activeNav" : "nav-item"}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default NavLink;