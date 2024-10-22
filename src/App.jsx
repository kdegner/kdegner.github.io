import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";
import wordleClassic from "../public/ProjectImages/wordleClassic.png";
import wordleStatistics from "../public/ProjectImages/wordleStatistics.png";
import wordleRocketLeague from "../public/ProjectImages/wordleRocketLeague.png";
import wordleChristmas from "../public/ProjectImages/wordleChristmas.png";
import wordleHalloween from "../public/ProjectImages/wordleHalloween.png";
import culversAll from "../public/ProjectImages/culversAll.png";
import culversBurger from "../public/ProjectImages/culversBurger.png";
import culversChicken from "../public/ProjectImages/culversChicken.png";
import beeSimulator from "../public/ProjectImages/beeSimulator.png";
import beeSimulator2 from "../public/ProjectImages/beeSimulator2.png";
import blogger from "../public/ProjectImages/blogger.png";
import blogger2 from "../public/ProjectImages/blogger2.png";


const projects = [
    {
        id: 1,
        name: "Wordle",
        type: "Web Application",
        skills: ["JavaScript", "HTML", "CSS"],
        description: "As part of my Software Tools and Processes class, three team members and I created a " +
            "Wordle game with 10 different modes. Through this project, I gained first-hand experience with the SCRUM " +
            "software development process. Additionally, I developed my JavaScript, HTML, and CSS skills.",
        images: [wordleClassic, wordleStatistics, wordleRocketLeague, wordleChristmas, wordleHalloween],
        year: 2023,
        link: "https://wordlegame.github.io",
        linkDescription: "View the Application"
    },
    {
        id: 2,
        name: "Blogger",
        type: "Web Application",
        skills: ["JavaScript", "HTML", "CSS", "Express.js", "MongoDB"],
        description: "The blogger full-stack application uses the Express framework for a REST API and MongoDB database to " +
            "post and delete blog posts. The blogger also has hashtags and a filter by hashtag feature. Through this " +
            "project, I learned how to build an API and use it in a web application.",
        images: [blogger, blogger2],
        year: 2023
    },
    {
        id: 3,
        name: "Culver's Menu Sorter",
        type: "Web Application",
        skills: ["React.js", "HTML", "CSS"],
        description: "The menu sorter sorts through the Culver's menu based on the search bar, food type, and allergens. " +
            "Through this project, I learned how to use React to make an efficient application.",
        images: [culversAll, culversBurger, culversChicken],
        year: 2023
    },
    {
        id: 4,
        name: "Bee Simulator",
        type: "JavaFX Application",
        skills: ["Java", "SceneBuilder"],
        description: "As part of my Design Patterns class, my lab partner and I created a JavaFX bee simulator with " +
            "multiple types of bees and flowers. Through this project, I gained experience developing domain " +
            "classes and using SceneBuilder for JavaFX applications.",
        images: [beeSimulator, beeSimulator2],
        year: 2024
    }
];

function App() {

  return (
    <div className={"HolyGrail"}>
        <Header />
        <MainContent projects={projects} />
        <Footer />
    </div>
  );
}

export default App;
