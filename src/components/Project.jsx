import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

export const Project = ({
  img,
  title,
  description,
  codeLink,
  liveLink,
  techstack,
}) => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "150px 1fr", // Coluna para imagem e conteúdo restante
        gridGap: "1rem", // Espaçamento entre as colunas
        justifyContent: "center",
        alignItems: "flex-start",
        textAlign: "justify",
        marginBottom: "2rem",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <div>
        <img
          src={img}
          alt="Project Thumbnail"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <h3 style={{ margin: "0 0 0.5rem 0" }}>{title}</h3>
          <span
            style={{
              marginBottom: "1rem",
              display: "block",
              wordWrap: "break-word", // Quebra de linha para descrições longas
              wordBreak: "break-word",
            }}
          >
            {description}
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
          {codeLink && (
            <a
              style={{
                marginRight: ".7rem",
                padding: ".5rem .7rem",
                textDecoration: "none",
                color: "#007acc",
                border: "1px solid",
                borderRadius: "4px",
                transition: "background 0.3s, color 0.3s",
              }}
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#007acc";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#007acc";
              }}
            >
              Go to code <FontAwesomeIcon icon={faCode} />
            </a>
          )}
          {liveLink && (
            <a
              style={{
                padding: ".5rem .7rem",
                textDecoration: "none",
                color: "#007acc",
                border: "1px solid #007acc",
                borderRadius: "4px",
                transition: "background 0.3s, color 0.3s",
              }}
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#007acc";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#007acc";
              }}
            >
              Live Demo <FontAwesomeIcon icon={faWindowMaximize} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
