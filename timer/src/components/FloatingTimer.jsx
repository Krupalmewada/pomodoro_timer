import useTimer from "../hooks/useTimer";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import SessionCount from "./SessionCount";
import useDrag from "../hooks/useDrag";
export default function FloatingTimer() {
  const { timeLeft, isRunning, isBreak, sessions, start, pause, reset } =
    useTimer();
  const { position, handleMouseDown } = useDrag();
  return (
    <div
      className="bg-gray-800 rounded-2xl p-3 w-52 shadow-2xl border border-gray-600"
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        zIndex: 2147483647,
        cursor: "grab",
      }}
      onMouseDown={handleMouseDown}
    >
      <TimerDisplay timeLeft={timeLeft} isBreak={isBreak} sessions={sessions} />
      <TimerControls
        isRunning={isRunning}
        start={start}
        pause={pause}
        reset={reset}
      />
      <SessionCount sessions={sessions} />
    </div>
  );
}
