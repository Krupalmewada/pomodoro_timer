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
        background: "#1f2937",
        borderRadius: "16px",
        padding: "12px",
        width: "208px",
        boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
        border: "1px solid #4b5563",
        textAlign: "center",
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
