const remoteMenuUrls = [
  "https://thecookoutsmenu.com",
  "https://thecookoutsmenu.com/menu",
  "https://thecookoutsmenu.com/api/menu",
  "https://www.thecookoutsmenu.com",
  "https://www.thecookoutsmenu.com/menu",
  "https://www.thecookoutsmenu.com/api/menu",
];

export async function fetchCookOutMenuData() {
  for (const url of remoteMenuUrls) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) continue;

      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const data = await response.json();
        if (data && Object.keys(data).length) return data;
      }

      const text = await response.text();
      if (text && text.length > 100) {
        const match = text.match(/\{.*\}/s);
        if (match) {
          try {
            const parsed = JSON.parse(match[0]);
            if (parsed && Object.keys(parsed).length) return parsed;
          } catch (error) {
            // ignore and continue
          }
        }
      }
    } catch (error) {
      // ignore failed remote fetch, fallback below
    }
  }

  return null;
}
