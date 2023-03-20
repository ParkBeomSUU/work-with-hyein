import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { BsClipboardCheck } from "react-icons/bs";
import CloseButton from "react-bootstrap/CloseButton";
import axios from "axios";
// import Checkbox from "./Checkbox";

// const OrderArray = OrderText.split(", ");
// console.log(OrderArray);

const OrderTest = () => {
  const accessToken = window.localStorage.getItem("accessToken");
  console.log("토큰 값!!" + accessToken);
  axios
    .get("http://localhost:8080/userOne", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    })
    .then((response) => {
      console.log("테이블 넘버" + response.data["tableNum"]);
    });
  axios
    .get("http://localhost:8080/order", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    })
    .then((response) => {
      let arr = response.data;
      arr = arr[arr.length - 1];
      let content = arr["content"];
      //"아무개나1, 아무개나2, 아무개나3"
      console.log("테이블 넘버" + response.data["tableNum"]);
    });

  //  번호 일치하는 테이블에 들어가게 하려면 어떻게 코드를 짜야하는지
  const [OrderText, setOrderText] = useState([]);

  // 삭제 기능
  const handleDelete = (delIdx) => {
    setOrderText(
      OrderText.filter((_, idx) => {
        return delIdx != idx;
      })
    );
  };

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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <BsClipboardCheck /> &nbsp;Table {idx + 1}
              <CloseButton
                onClick={() => {
                  handleDelete(idx);
                }}
                className="Xmark"
              />
            </div>
            <hr
              style={{
                margin: "10px",
              }}
            />

            <div className="OrderName">
              {anOrder
                .split(", ")
                .reverse()
                .map((o, i) => {
                  return (
                    <li id="List" key={i}>
                      {o}
                    </li>
                  );
                })}
            </div>
          </ul>
        );
      })}
    </>
  );
};

export default OrderTest;
