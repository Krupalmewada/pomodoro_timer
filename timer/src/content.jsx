import { createRoot } from "react-dom/client";
import FloatingTimer from "./components/FloatingTimer";

// Create host element
const host = document.createElement("div");
host.style.cssText =
  "position: fixed; top: 20px; left: 20px; z-index: 2147483647;";
document.body.appendChild(host);

// Attach shadow DOM — completely isolated from page CSS
const shadow = host.attachShadow({ mode: "open" });

// Create container inside shadow
const container = document.createElement("div");
shadow.appendChild(container);

// Fetch and inject your built CSS into shadow
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = chrome.runtime.getURL("assets/index.css");
shadow.appendChild(link);

// Render React inside shadow
createRoot(container).render(<FloatingTimer />);
