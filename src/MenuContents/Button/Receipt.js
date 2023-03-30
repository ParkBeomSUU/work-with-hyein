import { useState, useEffect } from "react";
import "./Recipt.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Table } from "react-bootstrap";
import MenuShow from "../MenuShow";

const Receipt = ({ forHyenoh }) => {
  const [show, setShow] = useState(false);
  const headerMeta = ["상품", "수량", "가격"];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (forHyenoh) {
      const oldOne = JSON.parse(localStorage.getItem("forHyenoh")) || {};

      console.log("원래 로컬에 저장되어 있던 거 :", oldOne);
      console.log("이제 거기에 더해야만 하는 거 :", forHyenoh);

      const newOne = {
        ...oldOne,
        ...forHyenoh,
        totalPrice: oldOne.totalPrice + forHyenoh.totalPrice,
      };

      console.log("새로운 로컬 스토리지 값 :", newOne);

      window.localStorage.getItem("forHyenoh", JSON.stringify(newOne));
    }
  }, [forHyenoh]); 
    console.log("forHyenoh" ,forHyenoh)
  return (
    <>
      <Button id="receiptCheck" size="lg" onClick={handleShow}>
        영수증
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="OrderList">영수증</Modal.Title>
        </Modal.Header>

        <Modal.Body className="OrderList">
          <Table striped bordered hover className="center">
            <thead>
              <tr>
                {headerMeta.map((i) => (
                  <th key={i}>{i}</th>
                ))}
              </tr>
            </thead>

            <tbody className="ReciptBody">
              {forHyenoh &&
                Object.keys(forHyenoh.volume).map((aMenu, index) => {
                  return (
                    <tr key={aMenu}>
                      <th>{aMenu}</th>
                      <th>{forHyenoh.volume[aMenu]}</th>
                      <th>{forHyenoh.bill[aMenu]}</th>
                    </tr>
                  );
                })}
            </tbody>

            <tfoot
              className="ReciptFoot"
              style={{ width: "100%", textAlign: "right" }}
            >
              <tr>
                <td style={{ backgroundColor: "white" }}></td>
                <td style={{ backgroundColor: "white" }}></td>
                <td style={{ backgroundColor: "white" }}>
                  total :{forHyenoh && forHyenoh.totalPrice}원
                </td>
              </tr>
            </tfoot>
          </Table>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="ModalSend"
            variant="outline-info"
            onClick={handleClose}
          >
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Receipt;
