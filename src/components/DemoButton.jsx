import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

export const DemoButton = ({liveLink}) => (
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
  );