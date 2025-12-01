// SEOHelmet.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHelmet = ({ title, description, url, image }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph (Facebook, LinkedIn, WhatsApp, etc.) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Anglofor" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content="@anglofor" />

            {/* Additional important tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default SEOHelmet;
