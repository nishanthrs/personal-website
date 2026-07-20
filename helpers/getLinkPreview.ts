export type LinkPreview = {
  url: string;
  title: string;
  favicon: string;
};

// Minimal HTML entity decoding for text pulled out of <title>/og:title.
function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&nbsp;/g, " ");
}

// Fetches a URL's page title and favicon at build time so a microblog card can
// render a link preview. Never throws: if the site is unreachable (or the build
// has no network), it falls back to the bare hostname as the title.
export async function getLinkPreview(url: string): Promise<LinkPreview> {
  let host = url;
  try {
    host = new URL(url).hostname;
  } catch {
    /* leave host as the raw url */
  }

  // Google's favicon service only needs the domain, so no HTML parsing needed.
  const favicon = `https://www.google.com/s2/favicons?domain=${host}&sz=64`;
  let title = host.replace(/^www\./, "");

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; nsalina-microblog-linkpreview/1.0)",
      },
    });
    if (res.ok) {
      const html = await res.text();
      const og =
        html.match(
          /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i
        ) ??
        html.match(
          /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:title["']/i
        );
      const titleTag = html.match(/<title[^>]*>([^<]*)<\/title>/i);
      const raw = og?.[1] ?? titleTag?.[1];
      if (raw && raw.trim()) {
        title = decodeEntities(raw.trim());
      }
    }
  } catch {
    /* network failed at build time; keep the hostname fallback */
  }

  return { url, title, favicon };
}
