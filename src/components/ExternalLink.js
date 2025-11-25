import * as React from 'react';

// src: https://www.codeconcisely.com/posts/react-external-links/

export default function ExternalButton({ children, url }) {
    const handleClick = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <button onClick={handleClick}>
            {children}
        </button>
    );
}