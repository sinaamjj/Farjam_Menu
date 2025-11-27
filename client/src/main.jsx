import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const appLogo = import.meta.env.VITE_APP_LOGO;
if (appLogo) {
  const updateIcon = (rel, type) => {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.rel = rel;
      if (type) link.type = type;
      document.head.appendChild(link);
    }

    link.href = appLogo;
  };

  updateIcon("icon", "image/png");
  updateIcon("apple-touch-icon");
}

const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
const analyticsWebsiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

if (analyticsEndpoint && analyticsWebsiteId) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = `${analyticsEndpoint.replace(/\/$/, "")}/umami`;
  script.dataset.websiteId = analyticsWebsiteId;
  document.head.appendChild(script);
}

createRoot(document.getElementById("root")).render(<App />);
