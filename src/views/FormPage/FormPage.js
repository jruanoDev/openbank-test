import PropTypes from "prop-types";
import React, { useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { Trans, useTranslation } from "react-i18next";

import { ReactComponent as ArrowRight } from "../../assets/img/arrow_right.svg";
import Button from "../../components/Button/Button";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";
import { submitForm } from "../../services/api";
import PasswordForm from "./PasswordForm/PasswordForm";

const FormPage = ({ onFormSuccess, goForward, goBackwards }) => {
  const [formValues, setFormValues] = useState({
    password: "",
    repeatPassword: "",
    hint: "",
  });

  const { t } = useTranslation();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const errorMessages = {
    password: t("FORM_Password_Validation"),
    repeatPassword: t("FORM_RepeatPassword_Validation"),
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

    const end = (success) => {
      onFormSuccess(success);
      goForward();
    };

    if (!formValidation.password && !formValidation.repeatPassword) {
      setErrors({});
      setLoading(true);

      submitForm(password)
        .then(() => {
          setLoading(false);
          end(true);
        })
        .catch(() => {
          setLoading(false);
          end(false);
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
              <h1 className="h1-sub">{t("PasswordManagerTitle")}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <Trans i18nKey="FORM_Description">
                  En primer lugar, debes crear una contraseña diferente para sus
                  pertenencias electrónicas. <br />
                  No podrás recuperar tu contraseña, así que recuérdela bien.
                </Trans>
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
          <Button
            type="filled"
            endAddornment={<ArrowRight fill="#fff" width="24" height="24" />}
            onClick={handleFormSubmit}
            loading={loading}
          >
            {t("Wizard_Next_Button")}
          </Button>
        }
        cancelButton={
          <Button onClick={goBackwards}>{t("Wizard_Back_Button")}</Button>
        }
      />
    </div>
  );
};

FormPage.propTypes = {
  index: PropTypes.number,
  goForward: PropTypes.func,
  goBackwards: PropTypes.func,
  restart: PropTypes.func,
  onFormSuccess: PropTypes.func.isRequired,
};

export default FormPage;
