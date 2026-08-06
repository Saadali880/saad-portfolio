import { mkdir, rm, writeFile, copyFile } from "node:fs/promises";

const origin = process.env.PORTFOLIO_ORIGIN || "http://localhost:3000";
const output = new URL("../static-site/", import.meta.url);

const [pageResponse, cssResponse] = await Promise.all([
  fetch(origin),
  fetch(`${origin}/app/globals.css`),
]);

if (!pageResponse.ok || !cssResponse.ok) {
  throw new Error(`Static export failed (${pageResponse.status}/${cssResponse.status})`);
}

let html = await pageResponse.text();
const css = await cssResponse.text();

html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["'](?:modulepreload|preload)["'][^>]*>/gi, "")
  .replace(/<link\b[^>]*href=["']\/app\/globals\.css["'][^>]*>/i, '<link rel="stylesheet" href="/styles.css">');

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await writeFile(new URL("index.html", output), html);
await writeFile(new URL("styles.css", output), css);
await copyFile(new URL("../public/og.png", import.meta.url), new URL("og.png", output));

console.log("Static Vercel bundle exported to static-site/");
