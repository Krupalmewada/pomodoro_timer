export default function TimerControls({ isRunning, start, pause, reset }) {
  return (
    <>
      <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
        <button
          onClick={isRunning ? pause : start}
          style={{
            flex: 2,
            padding: "8px",
            background: isRunning ? "#8b0000" : "#15803d",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          {isRunning ? "PAUSE" : "START"}
        </button>
        <button
          onClick={reset}
          style={{
            flex: 1,
            padding: "8px",
            background: "#374151",
            color: "#9ca3af",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontFamily: "monospace",
            fontSize: "12px",
          }}
        >
          RESET
        </button>
      </div>
    </>
  );
}
