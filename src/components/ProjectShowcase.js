import React from "react";
import { motion } from "framer-motion";
import styles from "./ProjectShowcase.module.css";
import { useInView } from "react-intersection-observer";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
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
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <img src={project.imgSrc} alt={project.title} />
          </a>
        </div>
        <div className={styles.projectContent}>
          <h3>
            <Translate>{project.title}</Translate>
          </h3>
          <p>
            <Translate>{project.description}</Translate>
          </p>
          <div className={styles.projectLinks}>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
                onClick={(e) => e.stopPropagation()}
              >
                <Translate>Code</Translate>
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
                <Translate>Demo</Translate>
              </a>
            )}
          </div>
        </div>
      </motion.div>
  );
};

const ProjectShowcase = () => {
  const projects = [
    {
      imgSrc: "/img/projects/portfolio.png",
      link: "portfolio",
      title: "This Portfolio",
      description: "My portfolio and blog website built with Docusaurus",
      repo: "https://github.com/nixoletas/portfolio",
      demo: "https://nickmiyasato.com.br",
    },
    {
      imgSrc: "/img/projects/futevento.png",
      link: "futevento",
      title: "Fut Evento",
      description:
        "Micro SaaS for managing soccer event (with Google Auth and Maps API)",
      repo: "https://github.com/nixoletas/fut-evento.git",
      demo: "https://futevento.com.br",
    },
    {
      imgSrc: "/img/intranet-govbr.png",
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
        <Translate>Showcase</Translate>
      </motion.h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
      <div className={styles.moreButtonContainer}>
        <Link
          to="/portfolio/projects/"
          className={styles.moreButton}
          aria-label="View all projects"
          title="View all projects"
        >
          <Translate>More</Translate>
        </Link>
      </div>
    </section>
  );
};

export default ProjectShowcase;
