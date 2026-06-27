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
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        zIndex: 2147483647,
        cursor: "grab",
        background: "#1a1a1a",
        padding: "12px",
        borderRadius: "12px",
        width: "200px",
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
