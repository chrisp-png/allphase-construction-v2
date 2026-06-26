/**
 * YouTubeEmbed (PR-92)
 *
 * Lazy-loaded YouTube video embed. Renders a click-to-load thumbnail
 * first so we don't pull in YouTube's iframe + JS until the user
 * actually wants to watch. Zero CLS impact, fast initial paint.
 *
 * Usage:
 *   <YouTubeEmbed
 *     videoId="dZVkhyNRXnk"
 *     title="All Phase Construction | Chris Porosky Story"
 *     aspectRatio="16:9"
 *   />
 *
 * Best practice: pair with <VideoObjectSchema /> on the same page so
 * Google can index the video as a search result.
 */
import { useState } from 'react';
import { Play } from 'lucide-react';

interface Props {
  /** YouTube video ID (the part after youtu.be/ or v=) */
  videoId: string;
  /** Title used for the iframe accessible name and the visible label */
  title: string;
  /** Aspect ratio for the thumbnail box. Defaults to 16:9. */
  aspectRatio?: '16:9' | '4:3' | '1:1';
  /** Optional CSS class to wrap the embed */
  className?: string;
  /** Whether to autoplay on load — defaults to false */
  autoplay?: boolean;
}

const ASPECT_PADDING: Record<string, string> = {
  '16:9': '56.25%',
  '4:3': '75%',
  '1:1': '100%',
};

export default function YouTubeEmbed({
  videoId,
  title,
  aspectRatio = '16:9',
  className = '',
  autoplay = false,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const padding = ASPECT_PADDING[aspectRatio];

  // hqdefault is fast + reliable; switch to maxresdefault if a higher-res
  // option exists for the video. (Some older videos don't have maxres.)
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=${
    autoplay || loaded ? 1 : 0
  }&rel=0&modestbranding=1`;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-black ${className}`}
      style={{ paddingBottom: padding }}
    >
      {!loaded ? (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="group absolute inset-0 w-full h-full block focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={thumbnailUrl}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors"
          >
            <span className="flex items-center justify-center w-20 h-20 rounded-full bg-red-600 group-hover:bg-red-700 transition-colors shadow-2xl">
              <Play className="w-10 h-10 text-white fill-white ml-1" />
            </span>
          </span>
          <span className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent text-white text-sm font-semibold">
            {title}
          </span>
        </button>
      ) : (
        <iframe
          src={embedSrc}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 w-full h-full border-0"
        />
      )}
    </div>
  );
}
