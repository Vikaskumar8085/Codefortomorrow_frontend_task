import React from "react";
import { ScaleLoader } from "react-spinners";

function Loader() {
  return (
    <>
      <div className="Loader_wrapper">
        <div className="Loader_box">
          <ScaleLoader color={"#ff4a57"} />
        </div>
      </div>
    </>
  );
}

export default Loader;
