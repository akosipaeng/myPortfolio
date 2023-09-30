import React from "react";

import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, description, skills, demo },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <u>{title}</u>
      </h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} target="_blank" className={styles.link}>
          Demo
        </a>
      </div>
    </div>
  );
};
