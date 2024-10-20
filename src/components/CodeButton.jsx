import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const CodeButton = ({codeLink}) => (
  <a
  style={{
    textDecoration: "underline",
    color: "#007acc",
    transition: "background 0.3s, color 0.3s",
  }}
  href={codeLink}
  target="_blank"
  rel="noopener noreferrer"
  onMouseOver={(e) => {
    e.currentTarget.style.color = "#00003f";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.color = "#007acc";
  }}
>
  Code <FontAwesomeIcon icon={faCode} />
</a>
  );