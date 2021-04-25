import "./Form.scss";

import React, { useState } from "react";
import { Col, Container, Row } from "react-grid-system";

import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";
import TextField from "../../components/TextField/TextField";

const Form = () => {
  const [hint, setHint] = useState("");

  const onHintChange = (e) => {
    setHint(e.target.value);
  };
  return (
    <div className="Form">
      <div className="Form-content">
        <Container fluid>
          <Row>
            <Col>
              <h1>Crea tu Password Manager</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                En primer lugar, debes crear una contraseña diferente para sus
                pertenencias electrónicas. <br />
                No podrás recuperar tu contraseña, así que recuérdela bien
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: 15 }}>
            <Col xs={5}>
              <TextField
                label="Crea tu Contraseña Maestra"
                placeHolder="Escribe tu contraseña"
                type="password"
              />
            </Col>
            <Col xs={5}>
              <TextField
                label="Repite tu Contraseña Maestra"
                placeHolder="Repite tu contraseña"
                type="password"
              />
            </Col>
          </Row>

          <Row style={{ marginTop: 30 }}>
            <Col>
              <p>
                También puedes crear una pista que te ayude a recordar tu
                contraseña maestra.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField
                label="Crea tu pista para recordar tu contraseña (opcional)"
                placeHolder="Introduce tu pista"
                maxLength={60}
                value={hint}
                onChange={onHintChange}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <ButtonContainer />
    </div>
  );
};

export default Form;
