import React, { useState } from "react";
import people from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, image, job, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const newPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomReview = () => {
    let index = Math.floor(Math.random() * people.length);
    setIndex(index);
  };
  return (
    <article
      className="container bg-white bg-opacity-100 shadow-lg "
      style={{ minHeight: "20rem", maxWidth: "40%" }}
    >
      <div>
        <img
          className="img-fluid mt-2"
          style={{ width: "30%", borderRadius: "50%" }}
          src={image}
          alt={name}
        />
      </div>
      <h5 className="font-monospace fw-bolder mt-2">{name}</h5>
      <h6 className="text-info fw-bold text-uppercase">{job}</h6>
      <p
        className="card-text text-center text-secondary mb-3"
        style={{ fontSize: "18px" }}
      >
        {text}
      </p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-primary me-2" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="btn btn-outline-primary" onClick={newPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="btn btn-primary mt-3 mb-2" onClick={randomReview}>
        Surprise Me
      </button>
    </article>
  );
}

export default Review;
