import React from "react";
import { motion } from "framer-motion";
import styles from "./ProjectShowcase.module.css";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.2, delay: index * 0.1 }}
        className={styles.projectCard}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className={styles.projectImage}>
          <img src={project.imgSrc} alt={project.title} />
        </div>
        <div className={styles.projectContent}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className={styles.projectLinks}>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
                onClick={(e) => e.stopPropagation()}
              >
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
                onClick={(e) => e.stopPropagation()}
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </a>
  );
};

const ProjectShowcase = () => {
  const projects = [
    {
      imgSrc: "/me/img/projects/vila-bella1.png",
      link: "shopping-vila-bella",
      title: "Shopping Vila Bella",
      description: "A fiction landing Page for a Shopping Mall",
      repo: "https://github.com/nixoletas/site-shopping-villa-bella",
      demo: "https://shopping-vila-bella.netlify.app/",
    },
    {
      imgSrc: "/me/img/projects/futevento.png",
      link: "futevento",
      title: "Fut Evento",
      description:
        "Micro SaaS for managing soccer event (with Google Auth and Maps API)",
      repo: "https://github.com/nixoletas/fut-evento.git",
      demo: "https://futevento.com.br",
    },
    {
      imgSrc: "/me/img/intranet-govbr.png",
      link: "intranet",
      title: "Intranet GovBR",
      description:
        "Intranet built with Angular, Express and Strapi. 300 daily users",
      repo: "https://github.com/nixoletas/intranet-govbr",
      demo: "https://nixoletas.github.io/intranet-govbr",
    },
  ];

  return (
    <section className={styles.showcase}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.title}
      >
        Showcase
      </motion.h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
