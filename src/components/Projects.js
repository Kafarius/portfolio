import styles from "../css/Projects.module.css";
import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";

const Projects = (props) => {
  return (
    <div className={styles.projects}>
      <h3>My Projects:</h3>
      {props.projects.map((project) => {
        return (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            githublink={project.githublink}
            recruitmentlink={project.recruitmentlink}
            url={project.url}
          />
        );
      })}
    </div>
  );
};

export default Projects;
