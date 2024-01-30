import React from "react";

export default function Card(props) {
  function handleClick(e) {
    e.preventDefault();
    props.switchViewMode(props.data.id);
  }

  return (
    <div className="card">
      <div
        className="company-logo"
        style={{ backgroundColor: props.data.logoBackground }}
      >
        <img
          className="company-logo-img"
          src={`/${props.data.logo}`}
          alt={`${props.data.company} company logo`}
        />
      </div>
      <p>
        {props.data.postedAt} <span className="dot">&#8226;</span> {props.data.contract}
      </p>
      <button
        type="button"
        className="card-title"
        onClick={handleClick}
      >
        {props.data.position}
      </button>
      <p>{props.data.company}</p>
      <h5 className="card-location">{props.data.location}</h5>
    </div>
  );
}
