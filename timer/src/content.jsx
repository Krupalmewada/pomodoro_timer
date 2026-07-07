import "./index.css";
import { createRoot } from "react-dom/client";
import FloatingTimer from "./components/FloatingTimer";

const container = document.createElement("div");
container.id = "pomodoro-root";
document.body.appendChild(container);
createRoot(container).render(<FloatingTimer />);
