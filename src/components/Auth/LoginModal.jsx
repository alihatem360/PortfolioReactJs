import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
function LoginModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { t, i18n } = useTranslation();
  return (
    <div className="login__modal">
      <Button onClick={handleShow} className="login__modal__btn">
        {t("login")} <i className="fas fa-sign-in-alt"></i>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Header className="modal__header_text">
          <span>{t("login")}</span>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder={
                  i18n.language === "ar" ? "البريد الالكتروني" : "Email"
                }
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder={
                  i18n.language === "ar" ? "كلمة المرور" : "Password"
                }
              />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LoginModal;
