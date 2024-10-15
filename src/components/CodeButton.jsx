import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const CodeButton = ({codeLink}) => (
  <a
  style={{
    marginRight: ".7rem",
    padding: ".5rem .7rem",
    textDecoration: "none",
    color: "#007acc",
    border: "1px solid #007acc",
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
  Code <FontAwesomeIcon icon={faCode} />
</a>
  );