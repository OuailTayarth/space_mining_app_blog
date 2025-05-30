/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

const Landing = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let ZeroString = "00";

  useEffect(() => {
    // logic to handle the countDown
    const target = new Date("10/28/2025 20:27:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        console.log("time is out");
        setDays(ZeroString);
        setHours(ZeroString);
        setMinutes(ZeroString);
        setSeconds(ZeroString);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="slider-stwo valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img">
              <img src="/img/mobile-app/Astrolith.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <div className="sub-title mb-5">
                <h6>Astrolith</h6>
              </div>
              <h1 className="fw-600 wow fadeIn" id="titleSize">
                A Digital Art Collection Showcasing the Future of Space
                Resources and Celebrating Diversity.
              </h1>
              <p className="launching-soon wow fadeIn">launching soon</p>
              <ul className="wow fadeIn">
                <li>
                  <h1 className="countdow-time fw-600">{days}</h1>
                  <p className="countdown-label">days</p>
                </li>
                <li>
                  <h1 className="countdow-time fw-600">
                    <span id="dots">:</span>
                    {hours}
                  </h1>
                  <p className="countdown-label">hours</p>
                </li>
                <li>
                  <h1 className="countdow-time fw-600">
                    <span id="dots">:</span>
                    {minutes}
                  </h1>
                  <p className="countdown-label">minutes</p>
                </li>
                <li>
                  <h1 className="countdow-time fw-600">
                    <span id="dots">:</span>
                    {seconds}
                  </h1>
                  <p className="countdown-label">seconds</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
