import dateful_laptop from "./images/dateful_laptop.png";
import audikids_laptop from "./images/audikids_laptop.png";
import audikids_tablet from "./images/audikids_tablet.png";
import audikids_phone from "./images/audikids_phone.png";
import portfolio_laptop from "./images/portfolio_laptop.png";
import jobTrack_mobile from "./images/jobTracker_mobile.png";
import rails from "./logos/rails.png";
import react from "./logos/react.png";
import javascript from "./logos/javascript.png";
import html5 from "./logos/html5.png";
import css3 from "./logos/css-3.png";
import bootstrap from "./logos/bootstrap.png";
import postgresql from "./logos/postgresql.png";
import cloudinary from "./logos/cloudinary.png";
import springboot from "./logos/springboot.png";
import mui from "./logos/mui.png";
import mysql from "./logos/mysql.png";
import postman from "./logos/postman.png";

export const projects = [
  {
    id: 1,
    type: "Web App",
    name: "Job Management",
    imgFrames: [{ id: 1, img: jobTrack_mobile }],
    status: "Personal Project | Melbourne | Completed",
    website: "https://github.com/ngoc-bach/job-management",
    github: "https://github.com/ngoc-bach/job-management",
    description:
      "Job-Management is a web application designed to provide a simple and user-friendly interface for Trainees and Account Managers to efficiently manage their job applications and postings.",
    team: "personal project",
    technologies: "React | SpringBoot | MySQL | Material UI | Postman",
    stacks: [
      {
        id: 1,
        url: react,
      },
      {
        id: 2,
        url: springboot,
      },
      {
        id: 3,
        url: mysql,
      },
      {
        id: 4,
        url: mui,
      },
      {
        id: 5,
        url: postman,
      },
    ],
  },
  {
    id: 2,
    type: "Website",
    name: "Portfolio",
    imgFrames: [{ id: 1, img: portfolio_laptop }],
    status: "Personal Portfolio | Melbourne | Completed",
    website: "https://rachel-portfolio.netlify.app",
    github: "https://github.com/ngoc-bach/rachel_portfolio",
    description:
      "This is my latest portfolio website, which I created using React and React-bootstrap. As a passionate web developer, I strive to build websites that are not only functional but also visually appealing and user-friendly. Please take a moment to browse through the projects I've worked on, and feel free to reach out to me if you have any questions.",
    team: "personal portfolio",
    technologies: "React | JavaScript | HTML | CSS | React-bootstrap",
    stacks: [
      {
        id: 1,
        url: react,
      },
      {
        id: 2,
        url: javascript,
      },
      {
        id: 3,
        url: html5,
      },
      {
        id: 4,
        url: css3,
      },
      {
        id: 5,
        url: bootstrap,
      },
    ],
  },
  {
    id: 3,
    type: "Static Web App",
    name: "Audi Kids",
    imgFrames: [
      { id: 1, img: audikids_laptop },
      { id: 2, img: audikids_tablet },
      { id: 3, img: audikids_phone },
    ],
    status: "Personal Project | Melbourne | In progress",
    website: "https://audi-kids.netlify.app/",
    github: "https://github.com/ngoc-bach/Audi-Kids",
    description:
      "Audi Kids is an audio books web application designed to help children learn and improve their reading skills through engaging and interactive audio content. The idea for Audi Kids was developed with the goal of providing a fun and educational resource for children to enhance their reading experience.",
    team: "personal project",
    technologies: "React | JavaScript | HTML | CSS | React-bootstrap",
    stacks: [
      {
        id: 1,
        url: react,
      },
      {
        id: 2,
        url: javascript,
      },
      {
        id: 3,
        url: html5,
      },
      {
        id: 4,
        url: css3,
      },
      {
        id: 5,
        url: bootstrap,
      },
    ],
  },
  {
    id: 4,
    type: "Web App",
    name: "Dateful",
    imgFrames: [{ id: 1, img: dateful_laptop }],
    status: "Team Final Project | Melbourne | Le Wagon",
    website: "https://www.dateful.me/",
    github: "https://github.com/enazbanks/dateful",
    description:
      "Dateful is a web based app that offers couples a resource for different dates and dating ideas. We realized there was a gap in the current market for a platform to help diversify and spice up people's dating lives. The USP (unique selling point) of the site was that each member of the couple could “favorite” dates for their partner to see, or “secret” dates so that they could surprise their partner at a preferred time.",
    team: "4 people",
    technologies:
      "Ruby on Rails | JavaScript | HTML | CSS | Bootstrap | Cloudinary | PostgreSQL",
    stacks: [
      {
        id: 1,
        url: rails,
      },
      {
        id: 2,
        url: javascript,
      },
      {
        id: 3,
        url: html5,
      },
      {
        id: 4,
        url: css3,
      },
      {
        id: 5,
        url: bootstrap,
      },
      {
        id: 6,
        url: cloudinary,
      },
      {
        id: 7,
        url: postgresql,
      },
    ],
  },
];
