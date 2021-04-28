import React from "react";
import { Col, Row } from "react-grid-system";

import TextField from "../../../components/TextField/TextField";

const PasswordForm = ({ onChange, values, errors }) => {
  const { password, repeatPassword, hint } = values;
  return (
    <>
      <Row style={{ marginTop: 15 }}>
        <Col xs={5}>
          <TextField
            label="Crea tu Contraseña Maestra"
            placeHolder="Escribe tu contraseña"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            tabIndex="1"
            error={errors.password}
          />
        </Col>
        <Col xs={5}>
          <TextField
            label="Repite tu Contraseña Maestra"
            placeHolder="Repite tu contraseña"
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            value={repeatPassword}
            onChange={onChange}
            tabIndex="2"
            error={errors.repeatPassword}
          />
        </Col>
      </Row>

      <Row style={{ marginTop: 30 }}>
        <Col>
          <p>
            También puedes crear una pista que te ayude a recordar tu contraseña
            maestra.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextField
            label="Crea tu pista para recordar tu contraseña (opcional)"
            placeHolder="Introduce tu pista"
            maxLength={255}
            name="hint"
            value={hint}
            onChange={onChange}
            tabIndex="3"
          />
        </Col>
      </Row>
    </>
  );
};

export default PasswordForm;
