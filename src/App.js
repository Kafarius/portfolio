import "./App.css";
import PersonalPanel from "./components/PersonalPanel";
import { useState } from "react";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { motion } from "framer-motion";

function App() {
  const [me, setMe] = useState({
    name: "Jan Kosieradzki",
    email: "jan.kosieradzki@wp.pl",
    github: "https://github.com/Kafarius",
    phone: " +48 780 607 880",
    address: "Warsaw",
    photo_src: "",
  });
  const [projects, setProjects] = useState([
    {
      name: "Minesweeper",
      description:
        "Classic Minesweeper game, where You need to locate and mark all bombs without blowing up. Based od React and CSS.",
      technologies: [
        { name: "React", src: "/img/icons/React-Light.svg" },
        { name: "HTML", src: "img/icons/HTML.svg" },
        { name: "CSS", src: "/img/icons/CSS.svg" },
      ],
      githublink: "https://github.com/Kafarius/minesweeper",
      url: "https://bejewelled-biscuit-1001ff.netlify.app/",
    },
    {
      name: "React-Estore",
      description:
        "This is a simple e-store template, where content of the cart and all changes are saved immediately in Firebase. ",
      technologies: [
        { name: "React", src: "/img/icons/React-Light.svg" },
        { name: "React-Router", src: "/img/icons/React-router.svg" },
        { name: "Redux", src: "/img/icons/Redux.svg" },
        { name: "Firebase", src: "/img/icons/Firebase-Light.svg" },
        { name: "HTML", src: "img/icons/HTML.svg" },
        { name: "CSS", src: "/img/icons/CSS.svg" },
      ],
      githublink: "https://github.com/Kafarius/React-Estore",
      url: "https://comforting-sunshine-412c94.netlify.app",
    },
    {
      name: "Posts",
      description:
        "This is a recruitment task, which i found at github. I wanted to present my solution to this task. ",
      technologies: [
        { name: "React", src: "/img/icons/React-Light.svg" },
        { name: "React-Router", src: "/img/icons/React-router.svg" },
        { name: "HTML", src: "img/icons/HTML.svg" },
        { name: "CSS", src: "/img/icons/CSS.svg" },
      ],
      githublink: "https://github.com/Kafarius/posts",
      recruitmentlink: "https://github.com/Pagepro/react-recruitment-task",
      url: "https://grand-rugelach-f47069.netlify.app/",
    },
    {
      name: "Random Users Data Generator",
      description:
        "It's a simple data generator, based on dummy-data. you can choose data by selecting checkboxes. ",
      technologies: [
        { name: "React", src: "/img/icons/React-Light.svg" },
        { name: "HTML", src: "img/icons/HTML.svg" },
        { name: "CSS", src: "/img/icons/CSS.svg" },
      ],
      githublink: "https://github.com/Kafarius/data_gen",
      url: "https://poetic-bunny-3a8db1.netlify.app",
    },
    {
      name: "Calendar/Planner",
      description:
        "This is an application that allows You to improve your time management and plan future events. Made on Python and Django.",
      technologies: [
        { name: "Python", src: "/img/icons/Python-Light.svg" },
        { name: "Django", src: "/img/icons/Django.svg" },
        { name: "HTML", src: "img/icons/HTML.svg" },
        { name: "CSS", src: "/img/icons/CSS.svg" },
      ],
      githublink: "https://github.com/Kafarius/Calendar",
      url: "",
    },
    {
      name: "Biuro Tłumaczeń Profesjonalnych",
      description: "This is a promoting website of great translation office.",
      technologies: [
        { name: "HTML", src: "img/icons/HTML.svg" },
        { name: "CSS", src: "/img/icons/CSS.svg" },
        { name: "Bootstrap", src: "/img/icons/Bootstrap.svg" },
      ],
      githublink: "https://btp-chylak.pl/",
      url: "https://btp-chylak.pl/",
    },
    {
      name: "Next projects coming soon ;)",
      description: "",
      technologies: [],
      githublink: "",
    },
  ]);
  const [frontend, setFrontend] = useState([
    { name: "HTML", src: "img/icons/HTML.svg", progress: 100 },
    { name: "CSS", src: "/img/icons/CSS.svg", progress: 100 },
    { name: "Bootstrap", src: "/img/icons/Bootstrap.svg", progress: 90 },
    { name: "JavaScript", src: "/img/icons/JavaScript.svg", progress: 90 },
    { name: "jQuery", src: "/img/icons/jQuery.svg", progress: 90 },
    { name: "React", src: "/img/icons/React-Light.svg", progress: 75 },
    { name: "React-Router", src: "/img/icons/React-router.svg", progress: 75 },
    { name: "Redux", src: "/img/icons/Redux.svg", progress: 75 },
    { name: "TypeScript", src: "/img/icons/TypeScript.svg", progress: 50 },
  ]);
  const [backend, setBackend] = useState([
    { name: "Python", src: "/img/icons/Python-Light.svg", progress: 50 },
    { name: "Django", src: "/img/icons/Django.svg", progress: 50 },
    { name: "MySQL", src: "/img/icons/MySQL-Light.svg", progress: 40 },
    { name: "Firebase", src: "/img/icons/Firebase-Light.svg", progress: 35 },
  ]);
  const [other, setOther] = useState([
    { name: "Atom", src: "/img/icons/Atom.svg", progress: 35 },
    { name: "Blender", src: "/img/icons/Blender-Light.svg", progress: 35 },
    { name: "Git", src: "/img/icons/Git.svg", progress: 50 },
    { name: "Github", src: "/img/icons/Github-Light.svg", progress: 50 },
    { name: "LinkedIn", src: "/img/icons/LinkedIn.svg", progress: 35 },
    { name: "Linux", src: "/img/icons/Linux-Light.svg", progress: 35 },
    { name: "Photoshop", src: "/img/icons/Photoshop.svg", progress: 50 },
    {
      name: "StackOverflow",
      src: "/img/icons/StackOverflow-Light.svg",
      progress: 40,
    },
    {
      name: "VisualStudio",
      src: "/img/icons/VisualStudio-Light.svg",
      progress: 50,
    },
    { name: "VSCode", src: "/img/icons/VSCode-Light.svg", progress: 50 },
    { name: "Webpack", src: "/img/icons/Webpack-Light.svg", progress: 35 },
  ]);

  return (
    <div className="App">
      <motion.header
        className="header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Welcome to my Portfolio Website</h2>
      </motion.header>
      <Projects projects={projects} />
      <PersonalPanel me={me} />
      <Skills frontend={frontend} backend={backend} other={other} />
    </div>
  );
}

export default App;
