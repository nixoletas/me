import React from "react";
import clsx from "clsx";
import styles from "./TechTags.module.css";

const TechTags = ({ tags, className }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={clsx(styles.tagsContainer, className)}>
      {tags.map((tag, index) => (
        <span key={index} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TechTags;
