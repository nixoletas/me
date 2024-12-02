import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

export const DemoButton = ({liveLink}) => (
  <a
  style={{
    textDecoration: "underline",
    color: "#007acc",
    transition: "background 0.3s, color 0.3s",
  }}
  href={liveLink}
  target="_blank"
  rel="noopener noreferrer"
  onMouseOver={(e) => {
    e.currentTarget.style.color = "#00003f";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.color = "#007acc";
  }}
>
              Live Demo <FontAwesomeIcon icon={faWindowMaximize} />
            </a>
  );