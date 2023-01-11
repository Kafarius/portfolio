import React from "react";
import styles from "../css/Skills.module.css";
import Skill from "./Skill";
import { motion } from "framer-motion";

const Skills = (props) => {
  return (
    <motion.div
      className={styles.skills}
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <header>
        <h2>Check out my skills!</h2>
      </header>
      <div className={styles.frontend}>
        <h3>Frontend</h3>
        {props.frontend.map((front) => {
          return (
            <Skill
              key={front.name}
              name={front.name}
              src={front.src}
              progress={front.progress}
            />
          );
        })}
      </div>
      <div className={styles.frontend}>
        <h3>Backend</h3>
        {props.backend.map((back) => {
          return (
            <Skill
              key={back.name}
              name={back.name}
              src={back.src}
              progress={back.progress}
            />
          );
        })}
      </div>
      <div className={styles.frontend}>
        <h3>Other</h3>
        {props.other.map((back) => {
          return (
            <Skill
              key={back.name}
              name={back.name}
              src={back.src}
              progress={back.progress}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
