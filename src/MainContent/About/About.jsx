import luna from "./luna.jpg";

const About = () => {
    return (
        <div className={"about"}>
            <h1 className={"title"}>About Me</h1>
            <div className={"content"}>
                <div className={"images"}>
                    <img loading={'lazy'} className={"image"} src={luna} alt={"Kadie and her Boston Terrier Luna"} />
                </div>
                <div className={"text"}>
                    <p>Hello World! I'm Kadie Degner, a software engineering student at the Milwaukee School of Engineering. I grew up in Elkhorn, Wisconsin with my three siblings. I graduated Elkhorn High School as the salutatorian of the class of 2021. </p>
                    <p>I started my college education at the University of Wisconsin-Platteville studying chemistry, and I transferred to MSOE for their biomolecular engineering program. I decided to take a Java programming class, loved it, and have continued to develop my coding skills in the software engineering program since 2023.</p>
                    <p>My background in chemistry and biomolecular engineering gives me a unique perspective in the applications of software engineering. I love exploring new ideas and learning new skills, so I am also pursuing a minor in data science.</p>
                    <p>Outside of school, I love playing video games, hanging out with friends, walking my Boston terrier Luna, kayaking, fishing, and playing pickleball.</p>
                </div>
            </div>
        </div>
    );
}

export default About;