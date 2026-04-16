import { useEffect } from 'react';

const CREDLY_EMBED_SRC = 'https://cdn.credly.com/assets/utilities/embed.js';

/**
 * Loads Credly's embed script once after badge placeholder divs are in the DOM.
 */
export function useCredlyEmbedScript(shouldLoad: boolean) {
  useEffect(() => {
    if (!shouldLoad) return;
    if (document.querySelector(`script[src="${CREDLY_EMBED_SRC}"]`)) return;

    const script = document.createElement('script');
    script.src = CREDLY_EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, [shouldLoad]);
}
