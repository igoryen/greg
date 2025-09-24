import * as React from 'react';

// src: https://www.codeconcisely.com/posts/react-external-links/

export default function ExternalLink({ children, url }) {
    return (
        <a href={url} target="_blank" rel="noopener">
            {children}
        </a>
    );
}
