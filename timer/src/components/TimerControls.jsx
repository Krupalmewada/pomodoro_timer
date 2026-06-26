export default function TimerControls({ isRunning, start, pause, reset }) {
  return (
    <>
      <div>
        <button onClick={isRunning ? pause : start}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}
