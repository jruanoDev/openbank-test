import "./ButtonContainer.scss";

import React from "react";
import { Col, Container, Row } from "react-grid-system";

import { ReactComponent as ArrowRight } from "../../assets/img/arrow_right.svg";
import Button from "../Button/Button";

const ButtonContainer = ({ onSubmit, onCancel }) => {
  return (
    <div className="ButtonContainer">
      <Container fluid style={{ height: "100%" }}>
        <Row justify="between" align="center" style={{ height: "100%" }}>
          <Col xs="content">
            <Button onClick={onCancel}>Cancelar</Button>
          </Col>
          <Col xs="content">
            <Button
              type="filled"
              endAddornment={<ArrowRight fill="#fff" width="24" height="24" />}
              onClick={onSubmit}
            >
              Siguiente
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ButtonContainer;
