import { useEffect } from 'react';

// Create-or-update a <meta> tag
function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

// Create-or-update a <link rel="...">
function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Per-page SEO. Canonical / og:url / og:image are derived from the LIVE origin
 * (window.location.origin), so they adapt automatically to whatever domain the
 * site is served from — no code change needed when the domain changes.
 */
export default function useSeo({ title, description, path = '/', jsonLd }) {
  const ld = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    const origin = window.location.origin;
    const url = origin + path;
    const image = origin + '/og-image.jpg';

    if (title) {
      document.title = title;
      upsertMeta('property', 'og:title', title);
      upsertMeta('name', 'twitter:title', title);
    }
    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
      upsertMeta('name', 'twitter:description', description);
    }
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('name', 'twitter:image', image);
    upsertLink('canonical', url);

    let ldEl = null;
    if (ld) {
      ldEl = document.createElement('script');
      ldEl.type = 'application/ld+json';
      ldEl.setAttribute('data-seo', 'page');
      ldEl.text = ld;
      document.head.appendChild(ldEl);
    }
    return () => {
      if (ldEl && ldEl.parentNode) ldEl.parentNode.removeChild(ldEl);
    };
  }, [title, description, path, ld]);
}
