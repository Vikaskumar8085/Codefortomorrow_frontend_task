import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollUp() {
  const handlClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      left: 0,
    });
  };
  return (
    <>
      <div className="ScrollUp">
        <button onClick={handlClick}>
          <AiOutlineArrowUp />
        </button>
      </div>
    </>
  );
}

export default ScrollUp;
