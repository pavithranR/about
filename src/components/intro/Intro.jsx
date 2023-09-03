import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: [".NET/Web Developer", "ML engineer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/myemoji.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi! I'm</h2>
          <h1>Pavithran R</h1>
          <h3>
            Aspiring <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#skill">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
