import React from "react";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";

import TextField from "../../../components/TextField/TextField";

const PasswordForm = ({ onChange, values, errors }) => {
  const { password, repeatPassword, hint } = values;

  const { t } = useTranslation();

  return (
    <>
      <Row style={{ marginTop: 15 }}>
        <Col xs={5}>
          <TextField
            label={t("FORM_Input_Label_1")}
            placeHolder={t("FORM_Input_Placeholder_1")}
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
            label={t("FORM_Input_Label_2")}
            placeHolder={t("FORM_Input_Placeholder_2")}
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
          <p>{t("FORM_Description_2")}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextField
            label={t("FORM_Input_Label_3")}
            placeHolder={t("FORM_Input_Placeholder_3")}
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
