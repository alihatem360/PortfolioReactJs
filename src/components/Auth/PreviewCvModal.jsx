import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
function PreviewCvModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="login__modal">
      <button className="login__modal__btn" onClick={handleShow}>
        Preview CV 👀
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body className="login__modal__container">
          <iframe
            src="https://drive.google.com/file/d/16dErkGdVQ3KYI61fOjozsfKfx8KU0FyY/preview"
            allow="autoplay"
            width="100%"
            height="100%"
            allowFullScreen
            title="pdf cv"
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PreviewCvModal;
