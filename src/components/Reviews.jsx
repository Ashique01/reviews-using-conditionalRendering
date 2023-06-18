import React from "react";
import Review from "./Review";
import data from "../data";

function Reviews() {
  return (
    <div>
      <h3 className="display-4 fw-bolder ">Client Reviews</h3>
      <div>
        <Review />
      </div>
    </div>
  );
}

export default Reviews;
