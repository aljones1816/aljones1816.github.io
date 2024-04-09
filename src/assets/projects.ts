import cicoBuddyThumb from "./cico-buddy.jpg";
import etchASketch from "./etch-a-sketch.jpg";
import simpleTemp from "./simple-temp.jpg";
import gameOfLife from "./game-of-life.jpg";
import ticTacToe from "./tictactoe.jpg";
import apiResumeThumb from "./apiResumeThumb.jpg";

const projects = [
  {
    id: 1,
    title: "CicoBuddy",
    description: "A simple and fast fitness tracking app.",
    imageUrl: cicoBuddyThumb,
    repoUrl: "https://github.com/aljones1816/cico-buddy/",
    liveUrl: "https://www.cico-buddy.com",
    techStack: ["Mongo", "Express", "React", "Node"],
  },
  {
    id: 2,
    title: "API Resume",
    description: "My resume as a REST API.",
    imageUrl: apiResumeThumb,
    repoUrl: "https://github.com/aljones1816/api-resume",
    liveUrl: "https://resume.alanjones.dev/api/docs/",
    techStack: ["Postgres", "Express", "Node", "Swagger"],
  },
  {
    id: 3,
    title: "John Conway's Game of Life.",
    description: "An interactive cellular automation game.",
    imageUrl: gameOfLife,
    repoUrl: "",
    liveUrl: "https://github.com/joshua-a-jones/game-of-life",
    techStack: ["Typescript", "React", "Webpack"],
  },
  {
    id: 4,
    title: "SimpleTemp Global",
    description: "A global surface temperature analysis.",
    imageUrl: simpleTemp,
    repoUrl: "https://github.com/aljones1816/GHCNV4_Analysis/",
    liveUrl: "https://github.com/aljones1816/GHCNV4_Analysis/",
    techStack: ["Python", "Flask", "HTML5", "CHART.js"],
  },
  {
    id: 5,
    title: "Tic-Tac-Toe",
    description: "Two player tic-tac-toe.",
    imageUrl: ticTacToe,
    repoUrl: "https://github.com/aljones1816/tic-tac-toe/tree/main",
    liveUrl: "https://alanjones.dev/tic-tac-toe/",
    techStack: ["Javascript", "HTML5", "CSS"],
  },
  {
    id: 6,
    title: "Sketch-A-Sketch",
    description: "A fun, retro Etch-a-Sketch app.",
    imageUrl: etchASketch,
    repoUrl: "https://github.com/aljones1816/etch-a-sketch",
    liveUrl: "https://alanjones.dev/etch-a-sketch/",
    techStack: ["Javascript", "HTML5", "CSS"],
  },
];

export default projects;
