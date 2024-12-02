import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

export const DemoButton = ({liveLink}) => (
  <a
  style={{
    textDecoration: "underline",
    color: "var(--ifm-color-primary)",
    transition: "background 0.3s, color 0.3s",
  }}
  href={liveLink}
  target="_blank"
  rel="noopener noreferrer"
  onMouseOver={(e) => {
    e.currentTarget.style.color = "var(--ifm-color-primary-lighter)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.color = "var(--ifm-color-primary)";
  }}
>
              Live Demo <FontAwesomeIcon icon={faWindowMaximize} />
            </a>
  );