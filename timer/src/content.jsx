import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import useTimer from "./hooks/userTimer";

function FloatingTimer() {
  const { timeLeft } = useTimer(); // ✅ inside a component now
  console.log(timeLeft);

  return <div>{timeLeft}</div>;
}

// inject into page
const container = document.createElement("div");
container.id = "pomodoro-root";
document.body.appendChild(container);
createRoot(container).render(<FloatingTimer />);
