import "./TreeCard.css";
import Button from "./Button.jsx";

export default function TreeCard({ treeName, imgLink, location }) {
  return (
    <div id="tree-card" className="tree-card">
      <h1>{treeName}</h1>
      <img src={imgLink} alt="" />
      <p>{location}</p>
      <Button />
    </div>
  );
}
