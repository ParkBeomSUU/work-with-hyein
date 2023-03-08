import { useState } from 'react';
import "./Recipt.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Table } from 'react-bootstrap';




// 모달을 노출하는 페이지
function Receipt() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" id="OrderCheck" size="lg" onClick={handleShow}>
        영수증
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="OrderList" >
            영수증
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="OrderList" >
        <Table striped bordered hover variant="dark" className="center">
        <thead>
          <tr>
            <th>상품명</th>
            <th>수량</th>

            <th>가격</th>
            <th></th>
          </tr>
        </thead>
        <tbody className='ReciptBody'>

           <th>예거마이스터</th>
           <th>3</th>
           <th>10000</th>



        </tbody>
        <tfoot className='ReciptFoot'>
        <th></th>
        <th></th>
        <th>total : 1123123</th>


        </tfoot>
       
      </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button
            className="ModalSend"
            variant="outline-info"
            onClick={handleClose} // 여기에 보내는 기능 추가
          >
            결제
          </Button>
          <Button
            className="ModalCancle"
            variant="outline-secondary"
            onClick={handleClose}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Receipt;