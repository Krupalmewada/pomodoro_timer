export default function TimerDisplay({ timeLeft, isBreak, sessions }) {
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const secs = String(timeLeft % 60).padStart(2, "0");
  return (
    <div
      style={{ background: "#86efac" }}
      className="rounded-lg p-4 mb-3 text-center"
    >
      <div
        style={{
          color: "#14532d",
          fontSize: "11px",
          letterSpacing: "3px",
          fontFamily: "monospace",
        }}
      >
        {isBreak ? "BREAK" : `SESSION ${sessions + 1}`}
      </div>
      <div
        style={{
          color: "#14532d",
          fontSize: "48px",
          fontFamily: "monospace",
          letterSpacing: "4px",
        }}
      >
        {mins}:{secs}
      </div>
    </div>
  );
}
