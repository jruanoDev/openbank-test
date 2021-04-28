import "./FormPage.scss";

import React, { useState } from "react";
import { Col, Container, Row } from "react-grid-system";

import { ReactComponent as ArrowRight } from "../../assets/img/arrow_right.svg";
import Button from "../../components/Button/Button";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";
import { submitForm } from "../../services/api";
import PasswordForm from "./PasswordForm/PasswordForm";

const FormPage = ({ onFormSuccess, goForward, goBackwards }) => {
  const [formValues, setFormValues] = useState({
    password: "pruebaKO123a",
    repeatPassword: "pruebaKO123a",
    hint: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // setear loading en botón

  const errorMessages = {
    password:
      "La contraseña debe tener entre 8 y 24 carácteres, un número y una mayúscula",
    repeatPassword: "Las contraseñas no coinciden",
  };

  const validate = {
    password: (password) =>
      Boolean(password.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.{8,24}$)/))
        ? undefined
        : errorMessages.password,
    repeatPassword: (password, repeatPassword) =>
      password === repeatPassword ? undefined : errorMessages.repeatPassword,
  };

  const handleFormValuesChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    const { password, repeatPassword } = formValues;

    const formValidation = {
      password: validate.password(password),
      repeatPassword: validate.repeatPassword(password, repeatPassword),
    };

    if (!formValidation.password && !formValidation.repeatPassword) {
      setErrors({});
      setLoading(true);

      submitForm(password)
        .then(() => {
          setLoading(false);

          onFormSuccess(true);
          goForward();
        })
        .catch(() => {
          setLoading(false);

          onFormSuccess(false);
          goForward();
        });
    } else {
      setErrors(formValidation);
    }
  };

  return (
    <div className="Form">
      <div className="Form-content">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="h1-sub">Crea tu Password Manager</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                En primer lugar, debes crear una contraseña diferente para sus
                pertenencias electrónicas. <br />
                No podrás recuperar tu contraseña, así que recuérdela bien.
              </p>
            </Col>
          </Row>
          <PasswordForm
            values={formValues}
            onChange={handleFormValuesChange}
            errors={errors}
          />
        </Container>
      </div>
      <ButtonContainer
        submitButton={
          <Col className="ButtonContainer-submit">
            <Button
              type="filled"
              endAddornment={<ArrowRight fill="#fff" width="24" height="24" />}
              onClick={handleFormSubmit}
              loading={loading}
            >
              Siguiente
            </Button>
          </Col>
        }
        cancelButton={<Button onClick={goBackwards}>Cancelar</Button>}
      />
    </div>
  );
};

export default FormPage;
