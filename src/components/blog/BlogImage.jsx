import { useState } from 'react';
import './BlogImage.css';

function Modal({ src, alt, isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal" style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '1000',
            backgroundColor: 'black',
            width: '100%',
            height: '100%',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
        }} onClick={onClose}>
            <img src={src} alt={alt} />
        </div>
    );
}
export default function BlogImage({ src, alt }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <img className="blog-image" src={src} alt={alt} style={{ borderRadius: '1rem' }} onClick={() => setIsModalOpen(true)} />
            {isModalOpen && (
                <Modal
                    src={src}
                    alt={alt}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    style={{ 
                        maxWidth: '100%', 
                        maxHeight: '90vh', 
                        borderRadius: '1rem', 
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