import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = path.dirname(fileURLToPath(import.meta.url));
const port = Number.parseInt(process.env.PORT ?? "8000", 10);
const host = process.env.HOST ?? "127.0.0.1";
const obsoletePathPrefix = "/www.devlixe.com";

const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".mp4", "video/mp4"],
  [".pdf", "application/pdf"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".ttf", "font/ttf"],
  [".webm", "video/webm"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"]
]);

function sendText(response, statusCode, message) {
  response.writeHead(statusCode, {
    "Content-Type": "text/plain; charset=utf-8",
    "Content-Length": Buffer.byteLength(message),
    "X-Content-Type-Options": "nosniff"
  });
  response.end(message);
}

function isInsideSiteRoot(filePath) {
  return filePath === siteRoot || filePath.startsWith(`${siteRoot}${path.sep}`);
}

async function getFile(requestPath) {
  const relativePath = requestPath.replace(/^\/+/, "");
  let candidate = path.resolve(siteRoot, relativePath || "index.html");

  if (!isInsideSiteRoot(candidate)) {
    return null;
  }

  let fileStats;
  try {
    fileStats = await stat(candidate);
  } catch {
    fileStats = null;
  }

  if (fileStats?.isDirectory()) {
    candidate = path.join(candidate, "index.html");
    try {
      fileStats = await stat(candidate);
    } catch {
      fileStats = null;
    }
  }

  if (!fileStats && !path.extname(candidate)) {
    candidate = `${candidate}.html`;
    try {
      fileStats = await stat(candidate);
    } catch {
      fileStats = null;
    }
  }

  return fileStats?.isFile() ? { filePath: candidate, fileStats } : null;
}

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.setHeader("Allow", "GET, HEAD");
    sendText(response, 405, "Method not allowed\n");
    return;
  }

  let requestPath;
  let requestUrl;
  try {
    requestUrl = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`);
    requestPath = decodeURIComponent(requestUrl.pathname);
  } catch {
    sendText(response, 400, "Bad request\n");
    return;
  }

  if (requestPath === obsoletePathPrefix || requestPath.startsWith(`${obsoletePathPrefix}/`)) {
    let destination = requestPath.slice(obsoletePathPrefix.length) || "/";
    if (destination === "/index.html") {
      destination = "/";
    }

    response.writeHead(302, {
      "Location": `${encodeURI(destination)}${requestUrl.search}`,
      "Cache-Control": "no-store"
    });
    response.end();
    return;
  }

  const file = await getFile(requestPath);
  if (!file) {
    sendText(response, 404, "Not found\n");
    return;
  }

  const extension = path.extname(file.filePath).toLowerCase();
  response.writeHead(200, {
    "Content-Type": mimeTypes.get(extension) ?? "application/octet-stream",
    "Content-Length": file.fileStats.size,
    "Cache-Control": extension === ".html" ? "no-store" : "public, max-age=3600",
    "X-Content-Type-Options": "nosniff"
  });

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  const stream = createReadStream(file.filePath);
  stream.on("error", () => {
    if (!response.headersSent) {
      sendText(response, 500, "Internal server error\n");
    } else {
      response.destroy();
    }
  });
  stream.pipe(response);
});

server.listen(port, host, () => {
  console.log(`Devlixe is running at http://${host}:${port}`);
});

function shutdown() {
  server.close(() => process.exit(0));
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
