import { useState, useEffect } from 'react';
import './BlogImage.css';

function Modal({ src, alt, isOpen, onClose }) {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '1000',
        }} onClick={onClose}>
            <img 
                src={src} 
                alt={alt} 
                style={{
                    maxWidth: '90%',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                }}
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}
export default function BlogImage({ src, alt }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <img className="blog-image" src={src} alt={alt} onClick={() => setIsModalOpen(true)} />
            {isModalOpen && (
                <Modal
                    src={src}
                    alt={alt}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    style={{ 
                        maxWidth: '100%', 
                        maxHeight: '90vh', 
                        objectFit: 'contain', 
                        backgroundColor: 'white',
                        margin: '0 auto',
                        display: 'block',
                        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
                        padding: '2rem',
                        
                    }}
                />
            )}
        </>
    );
}