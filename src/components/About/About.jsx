import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer who honed my skills at a coding
                bootcamp. I'm passionate about crafting engaging web experiences
                and look forward to contributing more to the digital world.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                "I'm a backend developer who learned the ropes at a coding
                bootcamp. I specialize in server-side scripting, database
                management, and optimizing performance. I'm passionate about
                tackling complex challenges and ensuring smooth backend
                functionality."
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Fullstack Developer</h3>
              <p>
                I'm a full-stack developer who acquired my skills through a
                bootcamp. With expertise in both frontend and backend
                technologies, I create comprehensive web solutions to deliver
                exceptional user experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
