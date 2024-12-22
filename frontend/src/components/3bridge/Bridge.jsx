import React, { useEffect, useState } from "react";
import "./style.css";

const Bridge = () => {
  const calculateTimeLeft = () => {
    let now = new Date();
    let targetDate = new Date(now);
    targetDate.setDate(targetDate.getDate() + 30); // Adding 30 days to the current date
    let difference = +targetDate - +now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval}>
        <p>{timeLeft[interval]}</p>
        <span>{interval}</span>
      </div>
    );
  });

  return (
    <>
      <section id="container">
        <div id="content">
          <p>PADHEGA NEPAL</p>
          <h1>
            <span>Bridge Course</span>
          </h1>
          <h2>For See students who are ready to learn</h2>
          <h3>Bridge Course Will be Valid for 30 days</h3>
          <div id="launch-time">
            <div>
              <p>{timeLeft.days}</p>
              <span>Days</span>
            </div>
            <div>
              <p>{timeLeft.hours}</p>
              <span>Hours</span>
            </div>
            <div>
              <p>{timeLeft.minutes}</p>
              <span>Minutes</span>
            </div>
            <div>
              <p>{timeLeft.seconds}</p>
              <span>Seconds</span>
            </div>
          </div>
          {/* Use relative path for the backend API */}
          <a href="/login">
            <button type="button">
              Login Bridge Course{" "}
              <img src="/assets/images/triangle.png" alt="Triangle" />
            </button>
          </a>
        </div>
        <img src="/assets/images/rocket.png" id="rocket" alt="Rocket" />
      </section>
    </>
  );
};

export default Bridge;
