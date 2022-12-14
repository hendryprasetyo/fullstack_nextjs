import { FaAward, FaUsers, FaFolder } from "react-icons/fa";
import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className="container pt-24">
      <h5 className="text-base flex justify-center">Get To Know</h5>
      <h2 className="text-base flex justify-center">About Me</h2>
      <div className={(styles.about__container, "container")}>
        <div className={styles.about__me}>
          <div className={styles.about__me_image}>
            <img src="/assets/im/head.jpg" alt="" />
          </div>
        </div>
        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icon} />
              <h5 className="text-[var(--color-bg)]">Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className={styles.about__card}>
              <FaUsers className={styles.about__icon} />
              <h5 className="text-[var(--color-bg)]">Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className={styles.about__card}>
              <FaFolder className={styles.about__icon} />
              <h5 className="text-[var(--color-bg)]">Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            incidunt accusantium tenetur, iusto quam architecto voluptatibus
            atque, quis cumque ad fugiat? A assumenda obcaecati sequi quam.
            Culpa earum amet quam?
          </p>

          <a
            href="#contact"
            className="btn btn-primary hover:bg-transparent hover:border-2 hover:border-[var(--color-primary)] mt-1"
          >
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
