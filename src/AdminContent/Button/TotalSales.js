import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Table } from "react-bootstrap";

// 모달을 노출하는 페이지
const TotalSales = ({}) => {
  const [show, setShow] = useState(false);

  //모달 관리
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" id="TotalModal" size="lg" onClick={handleShow}>
        매출 합계
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="OrderList">매출 합계</Modal.Title>
        </Modal.Header>

        <Modal.Body className="OrderList">
          <Table bordered variant="transparent" className="center">
            <thead id="TableHeader">
              <tr id="TotalTableCss">
                <th></th>
                <th>메뉴명</th>
                <th>수량</th>
                <th>합계</th>
              </tr>
            </thead>

            <tbody>
              {/* return ( */}
              <>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                </tr>
              </>
              {/* ); */}
            </tbody>

            <tfoot className="TotalFoot">
              <th></th>
              <th></th>
              TOTAL: 원
            </tfoot>
          </Table>
        </Modal.Body>

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
