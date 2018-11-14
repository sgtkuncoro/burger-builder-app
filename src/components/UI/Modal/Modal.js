import React from "react";
import PropTypes from "prop-types";
import classes from "./Modal.css";

const Modal = props => {
  return <div className={classes.Modal}>{props.children}</div>;
};

Modal.propTypes = {};

export default Modal;
