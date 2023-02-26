import React, { useState, useEffect } from "react";
import Clock from "./Clock";

function ClockApp() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <Clock date={date} />
    </div>
  );
}

export default ClockApp;
