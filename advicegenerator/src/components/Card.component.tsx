import { useState } from "react";
import desktopDivider from "../images/pattern-divider-desktop.svg";
import "./Card.css";

interface IAdvice {
  advice: string;
  id: number;
}

export function Card() {
  const [advice, setAdvice] = useState<IAdvice>()

  const handleClick = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => { setAdvice(data.slip) })
      .then(() => console.log(advice))
  }

  return (
    <>
      <div className="card">
        <h3 className="card-header">Advice #{advice?.id}</h3>
        <p className="card-text">{advice?.advice}</p>
        <img src={desktopDivider}></img>
        <button className="card-button" onClick={handleClick}></button>
      </div>
    </>
  );
}
