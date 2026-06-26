import useTimer from "../hooks/useTimer";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import SessionCount from "./SessionCount";
export default function FloatingTimer() {
  const { timeLeft, isRunning, isBreak, sessions, start, pause, reset } =
    useTimer();
  return (
    <>
      <TimerDisplay timeLeft={timeLeft} isBreak={isBreak} sessions={sessions} />

      <TimerControls
        isRunning={isRunning}
        start={start}
        pause={pause}
        reset={reset}
      />

      <SessionCount sessions={sessions} />
    </>
  );
}
