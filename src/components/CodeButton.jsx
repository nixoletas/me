import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const CodeButton = ({codeLink}) => (
  <a
  style={{
    textDecoration: "underline",
    color: "var(--ifm-color-primary)",
    transition: "background 0.3s, color 0.3s",
  }}
  href={codeLink}
  target="_blank"
  rel="noopener noreferrer"
  onMouseOver={(e) => {
    e.currentTarget.style.color = "var(--ifm-color-primary-lighter)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.color = "var(--ifm-color-primary)";
  }}
>
  Code <FontAwesomeIcon icon={faCode} />
</a>
  );