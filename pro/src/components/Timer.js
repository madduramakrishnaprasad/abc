import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null)

  // Runs on every render to update time (Like a clock)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Timer stopped! Cleaning up...");
      clearInterval(intervalRef.current);
    };
  }, []); // Cleanup on unmount

  const stopTimer = ()=>{
    clearInterval(intervalRef.current)
  }

  return (
  <> 
  <h2>Active Time: {seconds}s</h2>
  <button onClick={stopTimer}> clearInterval</button>
  </> 
);
};

export default Timer;
