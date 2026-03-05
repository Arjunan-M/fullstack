const http = require("http");
const { URL } = require("url");
const url = new URL("http://www.google.com");
http.get(url, (res) => {
    const { statusCode } = res;
    const contentType = res.headers["content-type"] || "";
    let raw = "";
    res.setEncoding("utf8");
    res.on("data", (chunk) => (raw += chunk));
    res.on("end", () => {
      console.log("Status:", statusCode);
      console.log("Content-Type:", contentType);
      try {
        const parsed = JSON.parse(raw);
        console.log("Body (parsed):", parsed);
      } catch (e) {
        console.log("Body (raw):", raw.slice(0, 500) + "...");
      }
    });
  })
  .on("error", (e) => {
    console.error("Request error:", e.message);
  });
