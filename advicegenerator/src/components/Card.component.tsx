import desktopDivider from "../images/pattern-divider-desktop.svg";
import "./Card.css";

export function Card() {
  return (
    <>
      <div className="card">
        <h3 className="card-header">Advice</h3>
        <p className="card-text">This is where the advice goes</p>
        <img src={desktopDivider}></img>
        <button className="card-button"></button>
      </div>
    </>
  );
}
