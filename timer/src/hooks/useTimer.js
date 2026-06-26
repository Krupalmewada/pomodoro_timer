import { useState, useEffect } from 'react'

function useTimer() {
  const [timeLeft, setTimeLeft] = useState(25*60)
  const [isRunning, setIsRunning] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const [sessions, setSessions] = useState(0)

 useEffect(() => {
  if (!isRunning) return    

  const interval = setInterval(() => {
    if (timeLeft === 0) {
    if (!isBreak) {
        setSessions(s => s + 1)  
        setTimeLeft(5 * 60)     
    } else {
        setTimeLeft(25 * 60)    
    }
    setIsBreak(b => !b)        
    setIsRunning(false)        // stop, wait for user to start
    return
    }
    setTimeLeft(t => t - 1)    
  }, 1000)

  return () => clearInterval(interval)  
}, [isRunning, timeLeft])

  const start = () => {setIsRunning(true)}
  const pause = () => {setIsRunning(false)}
  const reset = () => { setIsRunning(false)
  setTimeLeft(isBreak ? 5 * 60 : 25 * 60)  }
  return { timeLeft,
    isRunning,
    isBreak,
    sessions,
    start,
    pause,
    reset}
}


export default useTimer;