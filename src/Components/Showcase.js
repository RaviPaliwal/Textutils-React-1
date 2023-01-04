import React from "react";
import cardimg from "./Assets/Showcaseimages/cardimage.jpg";

export default function Showcase(props) {
  return (
    <>
    <hr></hr>
      <div className="container mb-5" align="center">
        <div className="card round-9" style={{ width: "210px"}}>
          <img className="card-img-top" src={cardimg} alt="Card" />
          <div className="card-body border-success border-5">
            <div className="border-primary border-5">
              <h4 className="card-title">{props.Cardname}</h4>
              <p className="card-text">{props.Cardtext}</p>
              <a
                href={props.linkedinurl}
                className="btn btn-primary stretched-link"
              >
                Linkedin Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
