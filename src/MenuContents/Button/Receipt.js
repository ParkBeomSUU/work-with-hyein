import { useState, useEffect } from 'react';
import "./Recipt.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Table } from 'react-bootstrap';
import MenuShow from '../MenuShow';



// 모달을 노출하는 페이지
const Receipt =({ bill,volume,content,isOderDone}) => {
  const [show, setShow] = useState(false);
  const [ totalPrice, setTotalPrice ] = useState(0)
//bill,volume,menuText,menu

  const headerMeta =[
    '상품',
    '수량',
    '가격'
  ]

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //총합 구해보기

  useEffect(() => {

    let tp = 0
    Object.keys(bill).forEach((bk) => {
      tp += bill[bk]
    })

    setTotalPrice(tp)
  
  }, [bill])

  useEffect(() => {
    console.log("현재까지 계산된 총액은:", totalPrice)
  }, [ totalPrice ])
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
           {headerMeta.map(i=><th>{i}</th>)}
          </tr>
        </thead>

        <tbody className='ReciptBody'>
           {/* 
           2023.03.10 첫 번째 과제. bill 값을 이용해 가격 테이블을 표시하고
           총계를 구한다 
           */}
           
           {Object.keys(bill).map((b, i) => {
            return <>
            <tr>
              <td>{b}</td> 
              <td>{volume[b]}</td>
             <td> {bill[b]}</td>
             </tr>
             </>
           })}
           
        </tbody>


        <tfoot className='ReciptFoot'>
          <th></th>
          <th></th>
         total : {totalPrice}
           

        </tfoot>
       
      </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button
            className="ModalSend"
            variant="outline-info"
            onClick={handleClose} // 여기에 보내는 기능 추가
          >
            확인
          </Button>
          <Button
            className="ModalCancle"
            variant="outline-secondary"
            onClick={handleClose}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Receipt;