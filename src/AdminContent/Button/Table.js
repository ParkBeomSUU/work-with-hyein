import React,{useEffect} from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import TablePic from "../Img/Table.png";
import StartModal from "./StartModal";
import App from "../../App";

const Table = ({volume, bill,totalPrice}) => {


  return (
    <>
      <Container>
        <Row id="MonitorRow">

          <Col id="TableMap" volume={volume}  bill={bill}>
          <td></td> 
              <td>{volume}</td>
             <td> {bill}</td>

          </Col>
        </Row>
      </Container>

      <div className="ModalDiv">
        <StartModal />
      </div>
    </>
  );

};

export default Table;
