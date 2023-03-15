import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import TableImg from "../Img/tableimg.png";
import RecipeModal from "./RecipeModal";
import StartModal from "./StartModal";

const order = {
  melon: 2,
  jimbeam: 3,
};

const Table = () => {
  const [show, setShow] = useState(false);
  const [tableContent, setTableContent] = useState({});

  useEffect(() => {
    setTableContent({
      order,
      table: 0,
    });
  }, []);

  return (
    <>
      <div
        id="TableMap"
        style={{
          backgroundImage: "url(tableimg.png)",
          position: "relative",
        }}
      >
        <Button
          onClick={() => {
            setShow(true);
            setTableContent({
              order,
              table: 1,
            });
          }}
          className="TableBtn"
          id="Btn1"
        >
          1
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setTableContent({
              order,
              table: 2,
            });
          }}
          className="TableBtn"
          id="Btn2"
        >
          2
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setTableContent({
              order,
              table: 3,
            });
          }}
          className="TableBtn"
          id="Btn3"
        >
          3
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setTableContent({
              order,
              table: 4,
            });
          }}
          className="TableBtn"
          id="Btn4"
        >
          4
        </Button>
      </div>
      <RecipeModal show={show} setShow={setShow} tableContent={tableContent} />
    </>
  );
};

export default Table;
