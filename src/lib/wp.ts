const domain = import.meta.env.WP_DOMAIN;
const apiUrl = `${domain}wp-json/wp/v2`;

export const getPages = async () => {
  if (!domain) {
    throw new Error("Please set the WP_DOMAIN environment variable");
  }
  const res = await fetch(`${apiUrl}/pages`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch pages");
  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Expected JSON response but received something else");
  }
  const data = await res.json();
  return data;
};

export const getPage = async (slug: string) => {
  if (!domain) {
    throw new Error("Please set the WP_DOMAIN environment variable");
  }
  const res = await fetch(`${apiUrl}/pages?slug=${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch pages");
  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Expected JSON response but received something else");
  }
  const data = await res.json();
  return data;
};
