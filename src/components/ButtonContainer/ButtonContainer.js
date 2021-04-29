import "./ButtonContainer.scss";

import React from "react";
import { Col, Container, Row } from "react-grid-system";

const ButtonContainer = ({ submitButton, cancelButton }) => {
  return (
    <div className="ButtonContainer">
      <Container fluid style={{ height: "100%" }}>
        <Row justify="between" align="center" style={{ height: "100%" }}>
          {cancelButton && (
            <Col xs="content" className="ButtonContainer-cancel">
              {cancelButton}
            </Col>
          )}
          {submitButton && (
            <Col className="ButtonContainer-submit">{submitButton}</Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ButtonContainer;
