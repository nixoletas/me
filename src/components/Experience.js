import React from "react";
import TechTags from "./TechTags";
import styles from "./Experience.module.css";

const Experience = ({ title, period, description, tags }) => {
  return (
    <div className={styles.experience}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.period}>{period}</p>
      <p className={styles.description}>{description}</p>
      <TechTags tags={tags} />
    </div>
  );
};

export default Experience;
