export default function Button() {
  function handleClick() {
    console.log("You clicked the second button");
  }

  return (
    <div>
      <button onClick={handleClick}>I do something!</button>
    </div>
  );
}
