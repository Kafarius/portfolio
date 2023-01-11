import React from "react";
import styles from "../css/Skill.module.css";

const Skill = (props) => {
  return (
    <div className={styles.skill}>
      <img src={props.src} />

      <div className={styles.progress}>
        <div className={styles.bar} style={{ width: `${props.progress}%` }}>
          <h4>{props.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Skill;
