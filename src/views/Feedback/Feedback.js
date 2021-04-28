import "./Feedback.scss";

import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";

import { ReactComponent as ArrowRight } from "../../assets/img/arrow_right.svg";
import { ReactComponent as DoneIcon } from "../../assets/img/done.svg";
import { ReactComponent as WarningIcon } from "../../assets/img/warning.svg";
import Button from "../../components/Button/Button";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";

const Feedback = ({ success, restart }) => {
  const { t } = useTranslation();

  const okData = {
    title: t("Feedback_Ok_Title"),
    text: t("Feedback_Ok_Text"),
  };

  const koData = {
    title: t("Feedback_Ko_Title"),
    text: t("Feedback_Ko_Text"),
  };

  const onFormCompleted = () => alert(t("Form_Alert"));

  const endAddornment = <ArrowRight fill="#ff0049" width="24" height="24" />;
  const button = success ? (
    <Button
      endAddornment={endAddornment}
      color="primary"
      onClick={onFormCompleted}
    >
      {t("Feedback_Ok_Button")}
    </Button>
  ) : (
    <Button endAddornment={endAddornment} color="primary" onClick={restart}>
      {t("Feedback_Ko_Button")}
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
