export default function SessionCount({ sessions }) {
  return (
    <p
      style={{
        textAlign: "center",
        fontSize: "11px",
        color: "#86efac",
        fontFamily: "monospace",
        marginTop: "8px",
      }}
    >
      {sessions} session{sessions !== 1 ? "s" : ""} completed
    </p>
  );
}
