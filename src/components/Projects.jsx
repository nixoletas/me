import React from 'react';
import { CodeButton } from '../../src/components/CodeButton';
import { DemoButton } from '../../src/components/DemoButton'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Link from '@docusaurus/Link';

export const Projects = ({ title, description, imgSrc, repo, demo, projectLink }) => {
    return (
        <section style={{
            display: "flex", 
            gap: "2rem", 
            flexWrap: "wrap", 
            alignItems: "center",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            flexDirection: "row",
            justifyContent: "center"
        }}>
            <div style={{ flex: "1" }}>
                <Link to={projectLink}>
                <img src={imgSrc} alt="Project Thumbnail" style={{
                    width: "400px", // Fixed width
                    height: "150px", // Fixed height
                    objectFit: "cover", // Ensures the image covers the container while maintaining aspect ratio
                    border: "2px solid #d3d3d3",
                    borderRadius: "1rem",
                    transition: "transform 0.3s ease"
                }} 
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                </Link>
            </div>
            <div style={{
                flex: "2", 
                textAlign: "left",
                maxWidth: "600px" // Ensure the text doesn't stretch too much on larger screens
            }}>
                <h2 style={{ 
                    fontSize: "2rem", 
                    fontWeight: "bold", 
                    marginBottom: "0.5rem", 
                }}>
                    {title}
                </h2>
                <p style={{ 
                    fontSize: "1.1rem", 
                    lineHeight: "1.6", 
                    marginBottom: "1rem", 
                }}>
                    {description}
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                    {repo ? (
                        <CodeButton codeLink={repo} />
                    ) : (
                        <p style={{color: 'grey', userSelect: 'none', cursor: 'not-allowed'}}>Private <FontAwesomeIcon icon={faCode} width={15} /></p>
                    )}
                    {demo ? (
                        <DemoButton liveLink={demo} />
                    ) : (
                        <p style={{color: 'grey', userSelect: 'none', cursor: 'not-allowed'}}>Unavailable <FontAwesomeIcon icon={faCode} width={15} /></p>
                    )}
                </div>
            </div>

            {/* Responsive Styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    section {
                        flex-direction: column;
                        padding: 1rem;
                    }

                    img {
                        width: 100%;
                        height: auto;
                    }

                    h2 {
                        font-size: 1.5rem;
                    }

                    p {
                        font-size: 1rem;
                    }

                    div {
                        width: 100%;
                    }
                }

                @media (max-width: 480px) {
                    h2 {
                        font-size: 1.2rem;
                    }

                    p {
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </section>
    );
};