export const Tag = ({children, docLink}) => {
    return (
    <a 
        href={docLink} target="_blank" rel="noopener noreferrer" 
        style={{
            backgroundColor: 'var(--ifm-color-primary)',
            color: 'white',
            borderRadius: '8px',
            padding: '0.4rem',
            fontSize: '1rem',
            marginRight: '0.4rem',
        }}>
            {children}
    </a>
    )
};