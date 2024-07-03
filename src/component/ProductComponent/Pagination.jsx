import React from "react";

function Pagination({ setpageNo, pageNo }) {
  return (
    <>
      <div className="Pagination_wrapper">
        <div className="Pagination_box">
          <button
            className="next-btn"
            onClick={() =>
              setpageNo((prev) => {
                if (prev) {
                  return pageNo + 1;
                } else {
                  return pageNo.length - 1;
                }
              })
            }
          >
            Next
          </button>
          <p>{pageNo}</p>
          <button
            className="prev-btn"
            onClick={() =>
              setpageNo((prev) => {
                if (prev) {
                  return 1;
                } else {
                  return pageNo - 1;
                }
              })
            }
          >
            prev
          </button>
        </div>
      </div>
    </>
  );
}

export default Pagination;
