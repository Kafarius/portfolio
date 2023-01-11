import React, { useState } from "react";
import styles from "../css/PersonalPanel.module.css";
import { motion } from "framer-motion";

const PersonalPanel = (props) => {
  return (
    <div className={styles.PersonalPanel}>
      <motion.img
        src="img/idimg.jpg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className={styles.PersonalInfo}>
        <motion.h2
          initial={{ opacity: 0, translateX: -150 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {props.me.name}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, translateX: -150 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {props.me.email}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: -150 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {props.me.github}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: -150 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {props.me.phone}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: -150 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {props.me.address}
        </motion.p>
      </div>
    </div>
  );
};

export default PersonalPanel;
