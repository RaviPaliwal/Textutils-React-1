import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("Enter Text here");
  //this is react State Example

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.sendAlert("Converted To Uppercase","primary")
  };
  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.sendAlert("Converted To Lowercase","primary")
  };
  const handleSentenceCase = () => {
    let Newtext = "";
    if (text === null || text === "") return false;
    else Newtext = text.toString();
    setText(
      Newtext.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      })
    );
    props.sendAlert("Converted To Sentence case","primary")
  };

  return (
    <>
      <div className="input input-group-lg wrap-text">
        <div className="container group ">
          <div>
            <textarea
              type="text"
              className="form-control my-3 text-wrap fs-5"
              rows="10"
              name=""
              onChange={handleOnChange}
              value={text}
              style={{backgroundColor:'#F0FFFF'}}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <button
          type="button"
          className="btn btn-danger mx-1 my-1"
          onClick={handleUpper}
        >
          Uppercase
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1 my-1"
          onClick={handleLower}
        >
          Lowercase
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1 my-1"
          onClick={handleSentenceCase}
        >
          Sentence Case
        </button>
      </div>

      <div className="container my-5">
        <button className="btn btn-info" style={{ display: "block" }}>
          Words are{" "}
          <span className="badge bg-primary">{text.split(" ").length}</span>
        </button>
        <br className="my-2"></br>
        <button className="btn btn-info " style={{ display: "block" }}>
          Average Time Read {" "}
          <span className="badge bg-primary">
            {(0.01 * text.split(" ").length).toFixed(2)}
          </span>
          {" "}min
        </button>
      </div>
    </>
  );
}

Textarea.propTypes = {
  initialtext: PropTypes.string,
};
