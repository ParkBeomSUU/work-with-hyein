import React, { useState, useEffect } from "react";
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
  // 값 저장
  const  [tableNum, setTableNum ] = useState(0);
  const [content,setContent] = useState("");
  const [totalPrice,setTotalPrice] =useState(0);
  const [createAt, setCreateAt] = useState(0);
  const [updateAt, setUpdateAt] =useState(0);

  const accessToken = window.localStorage.getItem('accessToken');

  //token 받는것.
    axios.get("http://localhost:8080/userOne", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization':"Bearer "+accessToken,
      }
    }).then(response => {
      let tableNum_local = response.data['tableNum']
      setTableNum(tableNum_local)

    })

    axios.get("http://localhost:8080/order", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization':"Bearer "+accessToken,
      }
    }).then(response => {
      let data=response.data
      let last = data[data.length-1];
      let content=last['content'];
      console.log("local content", content)
      let totalPrice = last['totalPrice'];
      let createAt = last['createAt'];
      let updateAt = last['updateAt'];
      setContent(content)
      setTotalPrice(totalPrice)
      setCreateAt(createAt)
      setUpdateAt(updateAt)
    })

  //값 화인 content가 갱신되면 orderText를 갱신
  useEffect(() => {
    console.log("useEffect사용",content)
  }, [content])
  console.log("global ",content)
  //  번호 일치하는 테이블에 들어가게 하려면 어떻게 코드를 짜야하는지
  const [OrderText, setOrderText] = useState([
      content,
    "양주 3, 칵테일 3",
    "양주 3, 칵테일 3, 커피 3, 양주 3, 칵테일 3, 커피 3, 양주 3, 칵테일 3, 커피 3, 피자 1",
    "칵테일 3, 커피 3",
  ]);


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
                .split(",")
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