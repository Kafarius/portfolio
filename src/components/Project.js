import React from "react";
import styles from "../css/Project.module.css";
import { motion } from "framer-motion";

const Project = (props) => {
  return (
    <motion.div
      className={styles.project}
      initial={{ opacity: 0, translateX: 150 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <header>
        <h3>
          <a target="_blank" href={props.url}>
            {props.name}
          </a>
        </h3>
        {props.recruitmentlink && (
          <a target="_blank" href={props.recruitmentlink}>
            {props.recruitmentlink}
          </a>
        )}
        <a target="_blank" href={props.githublink}>
          {props.githublink}
        </a>
      </header>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.technologies}>
        {props.technologies.map((tech) => {
          return (
            <div className={styles.tech} key={tech.name}>
              <img src={tech.src} />
              <p>{tech.name}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Project;
