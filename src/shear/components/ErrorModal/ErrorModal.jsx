import React from "react";

import Modal from "../Modal/Modal";

import classed from "./ErrorModule.module.css";

const ErrorModal = (props) => {
  return (
    <Modal>
      <div className={classed.error_modul}>
        <div className="error-title">
          <h1>{props.title}</h1>
        </div>
        <div className={classed.error_message}>
          <p>{props.message}</p>
        </div>
        <div className={classed.error_footer}>
          <button type="button" onClick={props.onClick}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;