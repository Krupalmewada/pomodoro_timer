export default function TimerDisplay({ timeLeft, isBreak, sessions }) {
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const secs = String(timeLeft % 60).padStart(2, "0");
  return (
    <>
      <div>{isBreak ? "BREAK" : `SESSION ${sessions + 1}`}</div>
      <div>
        {mins}:{secs}
      </div>
    </>
  );
}
