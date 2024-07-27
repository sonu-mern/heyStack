import React, { useState, useEffect } from "react";
import "../component/countdown.css";

function Countdown() {
  const [newYearTime, setNewYearTime] = useState(
    new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
  );

  const initialCountdownValues = ["00", "00", "00", "00"];

  const [dates, setDates] = useState({
    current: {
      elements: [],
      values: initialCountdownValues,
    },
    next: {
      elements: [],
      values: initialCountdownValues,
    },
    general: {
      elements: [],
    },
  });

  const updateAllCountdowns = () => {
    const currentDate = new Date();
    updateCountdown(dates.current, currentDate, true);
    const nextDate = new Date(
      currentDate.setSeconds(currentDate.getSeconds() + 1)
    );
    updateCountdown(dates.next, nextDate, false);
    for (let i = 0; i < dates.current.values.length; i++) {
      dates.general.elements[i] &&
        dates.general.elements[i].classList.remove("flip");
      setTimeout(() => {
        dates.general.elements[i] &&
          dates.general.elements[i].classList.add("flip");
      }, 50);
    }
  };

  const updateCountdown = (currentDates, currentTime, isCurrent) => {
    const totalSeconds = (newYearTime - currentTime) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const mins = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds) % 60;

    if (currentTime.getMonth() === 0 && currentTime.getDate() <= 2) {
      currentDates.values = initialCountdownValues;
      currentDates.elements.forEach((element) => {
        element.forEach((el) => {
          if (el) {
            el.innerHTML = currentDates.values[0];
          }
        });
      });

      if (isCurrent) {
        setNewYearTime(
          new Date(newYearTime.setFullYear(newYearTime.getFullYear() - 1))
        );
      }

      return;
    }

    currentDates.values = [
      days,
      formatTime(hours),
      formatTime(mins),
      formatTime(seconds),
    ];

    currentDates.elements.forEach((element, i) => {
      element.forEach((el, j) => {
        if (el) {
          el.innerHTML = currentDates.values[i];
        }
      });
    });
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  useEffect(() => {
    const daysElCurr = document.getElementsByClassName("curr");
    const daysElNext = document.getElementsByClassName("next");
    const hoursElCurr = document.getElementsByClassName("curr");
    const hoursElNext = document.getElementsByClassName("next");
    const minsElCurr = document.getElementsByClassName("curr");
    const minsElNext = document.getElementsByClassName("next");
    const secondsElCurr = document.getElementsByClassName("curr");
    const secondsElNext = document.getElementsByClassName("next");

    setDates({
      current: {
        elements: [
          Array.from(daysElCurr),
          Array.from(hoursElCurr),
          Array.from(minsElCurr),
          Array.from(secondsElCurr),
        ],
        values: initialCountdownValues,
      },
      next: {
        elements: [
          Array.from(daysElNext),
          Array.from(hoursElNext),
          Array.from(minsElNext),
          Array.from(secondsElNext),
        ],
        values: initialCountdownValues,
      },
      general: {
        elements: [
          document.getElementById("days"),
          document.getElementById("hours"),
          document.getElementById("mins"),
          document.getElementById("seconds"),
        ],
      },
    });

    // Initial update when component mounts
    updateAllCountdowns();

    // Set interval for regular updates
    const intervalId = setInterval(updateAllCountdowns, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <main>
        <div id="countdown">
          <div className="countdown__container">
            <div className="countdown__el">
              <div className="countdown__time flip" id="days">
                <span className="count curr top">00</span>
                <span className="count next top">00</span>
                <span className="count curr bottom">00</span>
                <span className="count next bottom">00</span>
              </div>
              <span className="countdown__label" style={{ color: "green" }}>
                Days
              </span>
            </div>
            <div className="countdown__el">
              <div className="countdown__time flip" id="hours">
                <span className="count curr top">00</span>
                <span className="count next top">00</span>
                <span className="count curr bottom">00</span>
                <span className="count next bottom">00</span>
              </div>
              <span className="countdown__label" style={{ color: "green" }}>
                Hours
              </span>
            </div>
            <div className="countdown__el">
              <div className="countdown__time flip" id="mins">
                <span className="count curr top">00</span>
                <span className="count next top">00</span>
                <span className="count curr bottom">00</span>
                <span className="count next bottom">00</span>
              </div>
              <span className="countdown__label" style={{ color: "green" }}>
                Minutes
              </span>
            </div>
            <div className="countdown__el">
              <div className="countdown__time flip" id="seconds">
                <span className="count curr top">00</span>
                <span className="count next top">00</span>
                <span className="count curr bottom">00</span>
                <span className="count next bottom">00</span>
              </div>
              <span className="countdown__label" style={{ color: "green" }}>
                Seconds
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Countdown;
