


const IconLink = ({href, children, ...props}) => {
    return (
        <li className={"icon-link"}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    );
}

export default IconLink;