import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialIcons = () => {

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/nixoletas', icon: faGithub },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/nixoletas', icon: faLinkedin },
        { name: 'Gmail', url: 'mailto:nick.miyasato.dev@gmail.com', icon: faEnvelope },
        { name: 'Youtube', url: 'https://youtube.com/nixoletas', icon: faYoutube },
        { name: 'Soundcloud', url: 'https://soundcloud.com/nixoletas', icon: faSoundcloud },
    ];

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <ul style={{ listStyle: 'none', padding: 0, display:'flex', flexDirection: 'row', justifyContent: 'center', gap: '1.5rem' }}>
                {socialLinks.map((link, index) => (
                    <li key={index} style={{ margin: '10px 0' }}>
                        <a  className='social-icon'
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'white', fontSize: '2rem', transition: 'transform 310ms ease, color 310ms ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--ifm-color-primary-light)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'white';
                            }}
                        >
                      <FontAwesomeIcon icon={link.icon} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialIcons;