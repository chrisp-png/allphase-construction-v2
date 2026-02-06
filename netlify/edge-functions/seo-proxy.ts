const SEO_ORIGIN = ""; // leave empty until we set the real SEO origin

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
  try {
    const url = new URL(request.url);
    const path = normalizePath(url.pathname);

    if (!isSeoPath(path)) return context.next();
    if (!SEO_ORIGIN) return context.next();

    const originUrl = new URL(path, SEO_ORIGIN).toString();

    let res: Response;
    try {
      res = await fetch(originUrl, {
        headers: {
          accept: "text/html,*/*",
          "user-agent": request.headers.get("user-agent") || ""
        }
      });
    } catch {
      return context.next();
    }

    if (!res.ok) return context.next();

    const html = await res.text();
    return new Response(html, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300"
      }
    });
  } catch {
    return context.next();
  }
};
