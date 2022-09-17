import React, { Fragment } from "react";
import logo from "../../../images/header-background.png";
function index({ project }) {
  return (
    <Fragment>
      <div className="card">
        <div className="img-container">
          <img
            src={`../../${project.imeg}`}
            className="card-img-top"
            alt="vdfgd"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{`../../${project.imeg}`}</p>
          <h5 className="card-title">{project.imeg}</h5>
        </div>
      </div>
    </Fragment>
  );
}

export default index;
