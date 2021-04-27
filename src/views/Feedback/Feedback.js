import "./Feedback.scss";

import React from "react";
import { Col, Container, Row } from "react-grid-system";

import { ReactComponent as DoneIcon } from "../../assets/img/done.svg";
import { ReactComponent as WarningIcon } from "../../assets/img/warning.svg";

const Feedback = ({ okMessage, koMessage, okText }) => {
  return (
    <div className="Feedback">
      <Container fluid>
        <Row>
          <Col xs="content">
            <DoneIcon width="64" height="64" />
          </Col>
          <Col>
            <Row gutterWidth={0}>
              <Col>
                <h1>Ha habido un error</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  No hemos podido modificar tu contraseña maestra. Inténtalo más
                  tarde.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feedback;
