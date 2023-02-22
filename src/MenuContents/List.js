import React from "react";
import { Row, Col } from "react-bootstrap";
import "./MenuShow.css";
import Cocktail from "./Button/cocktail";
import Food from "./Button/Food";
import Korean from "./Button/Korean";
import Liquor from "./Button/liquor";


const List =({content, setVolume, volume }) => {

  return (
    <>
      <Row>
        <Col id="show">

        {content === 0 && <Liquor  volume={volume} setVolume={setVolume} />}
        {content === 1 && <Korean />}
        {content === 2 && <Food />}
        {content === 3 && <Cocktail />}
        </Col>
      </Row>
    </>
  )
}

export default List;