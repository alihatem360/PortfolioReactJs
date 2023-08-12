import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
function VideoPopup({ videoKey }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="btn" rel="noreferrer" onClick={handleShow}>
        <span>Vedio</span> <i class="fa-solid fa-video"></i>
      </a>

      <Modal
        show={show}
        onHide={handleClose}
        fullscreen="true"
        size="lg"
        className="posaition-relative"
      >
        <div
          className="d-flex justify-content-end align-items-center p-2 position-absolute"
          style={{ top: "-12px", right: "-12px" }}
        >
          <Button
            variant="secondary"
            onClick={handleClose}
            className="btn btn-danger p-2 "
          >
            <i
              class="fa-solid fa-xmark"
              style={{ fontSize: "2rem", color: "white" }}
            ></i>
          </Button>
        </div>
        <iframe
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${videoKey}?mute=1&autoplay=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className=""
        ></iframe>
      </Modal>
    </>
  );
}

export default VideoPopup;
