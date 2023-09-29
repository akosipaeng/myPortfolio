import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rafael</h1>
        <p className={styles.description}>
          I'm a <strong>junior web developer</strong> dedicated to crafting
          seamless digital solutions. Proficient in HTML, CSS, and JavaScript, I
          thrive on turning ideas into user-friendly websites.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
