const SEO_ORIGIN = "https://REPLACE-ME-WITH-SEO-ORIGIN.example.com";

function normalizePath(pathname: string) {
  return pathname.endsWith("/") ? pathname : pathname + "/";
}

function isSeoPath(path: string) {
  return (
    path.startsWith("/locations/deerfield-beach/service-area/") ||
    path.startsWith("/roofing-services/roof-repair/")
  );
}

export default async (request: Request, context: any) => {
  const url = new URL(request.url);
  const path = normalizePath(url.pathname);

  if (!isSeoPath(path)) return context.next();

  // Fetch same path from the SEO origin (origin should have real static files at identical paths)
  const originUrl = new URL(path, SEO_ORIGIN).toString();

  const res = await fetch(originUrl, {
    headers: {
      // Be explicit: we want HTML
      "accept": "text/html,*/*",
      // Forward user-agent helpful for debugging
      "user-agent": request.headers.get("user-agent") || ""
    }
  });

  // If origin doesn't have it, don't serve a fake page—let the main site handle normally
  if (!res.ok) return context.next();

  // Return HTML with a guaranteed 200
  const html = await res.text();
  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300"
    }
  });
};
