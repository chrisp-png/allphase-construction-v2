import { useEffect } from 'react';

interface InlineSchemaProps {
  schemas: Record<string, unknown>[];
}

/**
 * Injects JSON-LD schema script tags directly into document.head,
 * bypassing React Helmet to avoid conflicts with NuclearMetadata.
 */
const InlineSchema = ({ schemas }: InlineSchemaProps) => {
  useEffect(() => {
    const elements: HTMLScriptElement[] = [];
    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      elements.push(script);
    });
    return () => {
      elements.forEach((el) => el.remove());
    };
  }, [schemas]);

  return null;
};

export default InlineSchema;
