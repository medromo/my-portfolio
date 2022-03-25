import React from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

function Modal({ children, setOpenModal }) {
  
  return ReactDOM.createPortal(
    <div
      className="ModalBackground"
      onClick={() => setOpenModal((prev) => !prev)}>
        <div onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
