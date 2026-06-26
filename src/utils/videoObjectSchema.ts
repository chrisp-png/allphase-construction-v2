/**
 * VideoObject Schema (PR-92)
 *
 * Generates JSON-LD VideoObject markup for embedded YouTube videos.
 * Drives video-result eligibility in Google SERPs and AI Overview
 * citations.
 *
 * Per https://schema.org/VideoObject, the required fields are:
 *   - name (title)
 *   - description (1-2 sentence summary)
 *   - thumbnailUrl
 *   - uploadDate (ISO 8601 date)
 *   - contentUrl or embedUrl
 *
 * Recommended:
 *   - duration (ISO 8601 duration, e.g. PT4M30S)
 *   - publisher (Organization)
 *   - locationCreated (city)
 */

export interface VideoMeta {
  /** YouTube video ID — the part after youtu.be/ or v= */
  videoId: string;
  /** Display title — used as schema.org "name" */
  title: string;
  /** 1-2 sentence summary for schema.org "description" */
  description: string;
  /** ISO 8601 upload date (YYYY-MM-DD) */
  uploadDate: string;
  /** Optional ISO 8601 duration (e.g. "PT4M30S" for 4 minutes 30 seconds) */
  duration?: string;
  /** Optional city where the video was filmed */
  city?: string;
}

export function generateVideoObjectSchema(meta: VideoMeta): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: meta.title,
    description: meta.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${meta.videoId}/maxresdefault.jpg`,
    uploadDate: meta.uploadDate,
    contentUrl: `https://www.youtube.com/watch?v=${meta.videoId}`,
    embedUrl: `https://www.youtube.com/embed/${meta.videoId}`,
    publisher: {
      '@type': 'Organization',
      name: 'All Phase Construction USA',
      logo: {
        '@type': 'ImageObject',
        url: 'https://allphaseconstructionfl.com/logo.svg',
      },
    },
  };
  if (meta.duration) schema.duration = meta.duration;
  if (meta.city) {
    schema.locationCreated = {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: meta.city,
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    };
  }
  return schema;
}
