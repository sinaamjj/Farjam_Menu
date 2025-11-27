export default {
  async fetch(request, env, ctx) {
    // Serve built assets via the automatic Assets binding.
    let response = await env.ASSETS.fetch(request);

    // For SPA navigation, fall back to index.html when a path is missing.
    if (response.status === 404 && request.method === "GET") {
      const url = new URL(request.url);
      url.pathname = "/index.html";
      response = await env.ASSETS.fetch(new Request(url, request));
    }

    return response;
  },
};
