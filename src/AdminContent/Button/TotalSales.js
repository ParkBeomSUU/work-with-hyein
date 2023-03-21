import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Table } from "react-bootstrap";
import total from "../TotalData.json";

// 모달을 노출하는 페이지
const TotalSales = ({}) => {
  const [show, setShow] = useState(false);

  //모달 관리
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" id="TotalModal" size="lg" onClick={handleShow}>
        TOTAL
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="OrderList"></Modal.Title>
        </Modal.Header>

        <Modal.Body className="OrderTotalModal">
          <Table bordered variant="transparent" className="center">
            <thead id="TableHeader">
              <tr id="TotalModalHeader">
                <th></th>
                <th>메뉴명</th>
                <th>수량</th>
                <th>합계</th>
              </tr>
            </thead>

            <tbody>
              <>
                <tr>
                  <td>{total.id}</td>
                  <td>{total.orderList}</td>
                  <td>{total.orderCount}</td>
                  <td>{total.o_total}원</td>
                </tr>

                <tr>
                  <td></td>
                  <td>{total.orderList}</td>
                  <td>{total.orderCount}</td>
                  <td>{total.o_total}원</td>
                </tr>

                <tr>
                  <td></td>
                  <td>{total.orderList}</td>
                  <td>{total.orderCount}</td>
                  <td>{total.o_total}원</td>
                </tr>
              </>
            </tbody>

            {/* <tfoot id="">
              <th></th>
              <th></th>
              <th></th>
              총계: 0000000원
            </tfoot> */}
          </Table>
        </Modal.Body>
        <p id="TotalCount">총 합계: 283,700원</p>
        <Modal.Footer>
          <Button id="TotalClose" variant="outline-info" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TotalSales;
