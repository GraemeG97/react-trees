import "./TreeCard.css";
import Button from "./Button.jsx";

export default function TreeCard(props) {
  return (
    <div id="tree-card">
      <h1>{props.treeName}</h1>
      <img src={props.imgLink} alt="" />
      <p>{props.location}</p>
      <Button />
    </div>
  );
}
