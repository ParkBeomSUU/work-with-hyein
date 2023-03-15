import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Admin.css";
import TableOrder from "./TableOrder";

function RecipeModal({ show, setShow, tableContent }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>주문 목록</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "black" }}>
          {JSON.stringify(tableContent)}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="SendModal"
            variant="secondary"
            onClick={handleClose}
          >
            결제
          </Button>
          <Button
            className="CancleModal"
            variant="primary"
            onClick={handleClose}
          >
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RecipeModal;
