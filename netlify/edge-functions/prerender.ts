import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const userAgent = request.headers.get("user-agent") || "";

  const isBot = /googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|linkedinbot|slackbot|embedly/i.test(userAgent);

  if (isBot) {
    const prerenderToken = Deno.env.get("PRERENDER_TOKEN");

    if (!prerenderToken) {
      console.warn("PRERENDER_TOKEN not configured, skipping prerender");
      return context.next();
    }

    const prerenderUrl = "https://service.prerender.io" + request.url;
    return fetch(prerenderUrl, {
      headers: {
        "X-Prerender-Token": prerenderToken
      }
    });
  }

  return context.next();
};
