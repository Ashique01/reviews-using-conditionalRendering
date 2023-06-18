import React, { useState } from "react";
import people from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./Review.css";

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
    let RandomNumber = Math.floor(Math.random() * people.length);
    // for avoiding repeating
    if (RandomNumber === index) {
      RandomNumber = index + 1;
    }
    setIndex(checkNumber(RandomNumber));
  };

  return (
    <article className="container card-container">
      <div className="card-img-container">
        <img className="img-fluid mt-2" src={image} alt={name} />
      </div>
      <h5 className="font-monospace fw-bolder mt-2">{name}</h5>
      <h6 className="text-info fw-bold text-uppercase">{job}</h6>
      <p className="card-text">{text}</p>
      <div className="card-button-container">
        <button className="btn btn-outline-primary me-2" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="btn btn-outline-primary" onClick={newPerson}>
          <FaChevronRight />
        </button>
      </div>
      <div className="card-button-container">
        <button className="btn btn-primary" onClick={randomReview}>
          Surprise Me
        </button>
      </div>
    </article>
  );
}

export default Review;
