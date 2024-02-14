import { useState } from "react";

export default function Monkey() {
  const [visable, setVisable] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setVisable(!visable);
        }}
      >
        Show Monkey
      </button>
      {visable ? (
        <img src="https://cdn.britannica.com/88/143588-050-E4C19B79/monkey.jpg" />
      ) : null}
    </>
  );
}

//if statement
//was the button pressed
