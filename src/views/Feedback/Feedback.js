import "./Feedback.scss";

import React from "react";
import { Col, Container, Row } from "react-grid-system";

import { ReactComponent as ArrowRight } from "../../assets/img/arrow_right.svg";
import { ReactComponent as DoneIcon } from "../../assets/img/done.svg";
import { ReactComponent as WarningIcon } from "../../assets/img/warning.svg";
import Button from "../../components/Button/Button";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";

const Feedback = ({ success, restart }) => {
  const okData = {
    title: "¡Tu Password Manager ya está creado!",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  };

  const koData = {
    title: "Ha habido un error",
    text:
      "No hemos podido modificar tu contraseña maestra. Inténtalo más tarde.",
  };

  const onFormCompleted = () => alert("Formulario completado");

  const endAddornment = <ArrowRight fill="#ff0049" width="24" height="24" />;
  const button = success ? (
    <Button
      endAddornment={endAddornment}
      color="primary"
      onClick={onFormCompleted}
    >
      Acceder
    </Button>
  ) : (
    <Button endAddornment={endAddornment} color="primary" onClick={restart}>
      Volver a Password Manager
    </Button>
  );

  const data = success ? okData : koData;
  return (
    <div className="Feedback">
      <div className="Feedback-content">
        <Container fluid>
          <Row>
            <Col xs="content">
              {success ? (
                <DoneIcon width="64" height="64" />
              ) : (
                <WarningIcon width="64" height="64" />
              )}
            </Col>
            <Col>
              <Row gutterWidth={0}>
                <Col>
                  <h1>{data.title}</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{data.text}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <ButtonContainer submitButton={button} />
    </div>
  );
};

export default Feedback;
