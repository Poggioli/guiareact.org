import React from 'react';
import { Router } from 'next/router';

const trackingID = 'G-TQFVHD7RW1';

export const useAnalytics = () => {
    React.useEffect(() => {
        const handleRouteChange = (url) => {
            if (process.env.NODE_ENV === 'production') {
                window.gtag('config', trackingID, {
                    page_location: url,
                    page_title: document.title,
                });
            }
        };
        Router.events.on('routeChangeComplete', handleRouteChange);
        return () => Router.events.off('routeChangeComplete', handleRouteChange);
    }, []);
};

export const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`;

export function renderSnippet() {
    if (process.env.NODE_ENV === 'production') {
        return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${trackingID}');
    `;
    }
}
