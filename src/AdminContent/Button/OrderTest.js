import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { BsClipboardCheck } from "react-icons/bs";

const OrderText = [
  "양주 4, 칵테일 1, 커피 2",
  "양주 3, 칵테일 3, 커피 3",
  "양주 3, 칵테일 3, 커피 3, 양주 3, 칵테일 3, 커피 3, 양주 3, 칵테일 3, 커피 3",
  "양주 3, 칵테일 3, 커피 3",
  "양주 3, 칵테일 3, 커피 3",
  "양주 3, 칵테일 3, 커피 3",
  "양주 3, 칵테일 3, 커피 3",
  "양주 3, 칵테일 3, 커피 3",
];
// const OrderArray = OrderText.split(", ");
// console.log(OrderArray);

const OrderTest = () => {
  return (
    <>
      {OrderText.map((anOrder, idx) => {
        return (
          <ul
            className="each-table"
            key={idx}
            style={{
              width: "50%",
            }}
          >
            <div className="TableName">
              <BsClipboardCheck /> &nbsp;Table 1
              <FontAwesomeIcon icon={faXmark} className="Xmark" />
            </div>
            <hr
              style={{
                margin: "10px",
              }}
            />
            <div className="OrderName">
              {anOrder.split(", ").map((o, i) => {
                return <li key={i}>{o}</li>;
              })}
            </div>
          </ul>
        );
      })}
    </>
  );
};

export default OrderTest;
