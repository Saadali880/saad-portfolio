import { mkdir, rm, writeFile, copyFile, readFile, readdir } from "node:fs/promises";

const origin = process.env.PORTFOLIO_ORIGIN || "http://localhost:3000";
const output = new URL("../static-site/", import.meta.url);

const pageResponse = await fetch(origin);
const cssDirectory = new URL("../dist/client/_next/static/css/", import.meta.url);
const cssFile = (await readdir(cssDirectory)).find((file) => file.endsWith(".css"));

if (!pageResponse.ok || !cssFile) {
  throw new Error(`Static export failed (${pageResponse.status})`);
}

let html = await pageResponse.text();
const css = await readFile(new URL(cssFile, cssDirectory), "utf8");

html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["'](?:modulepreload|preload)["'][^>]*>/gi, "")
  .replace(/<link\b[^>]*href=["']\/app\/globals\.css["'][^>]*>/i, `<style>${css}</style>`);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await writeFile(new URL("index.html", output), html);
await writeFile(new URL("styles.css", output), css);
await copyFile(new URL("../public/og.png", import.meta.url), new URL("og.png", output));
await copyFile(new URL("../public/og-v2.png", import.meta.url), new URL("og-v2.png", output));
await copyFile(new URL("../public/og-v3.png", import.meta.url), new URL("og-v3.png", output));

const publicDirectory = new URL("../public/", import.meta.url);
for (const file of await readdir(publicDirectory)) {
  if (file.startsWith("cert-") && file.endsWith(".jpg")) {
    await copyFile(new URL(file, publicDirectory), new URL(file, output));
  }
}

console.log("Static Vercel bundle exported to static-site/");
