import "./ProductInformation.scss";
import "../../i18n";

import PropTypes from "prop-types";
import React, { useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";

import { ReactComponent as ArrowRight } from "../../assets/img/arrow_right.svg";
import { ReactComponent as LockIcon } from "../../assets/img/icon1.svg";
import { ReactComponent as HumanIcon } from "../../assets/img/icon2.svg";
import Button from "../../components/Button/Button";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";
import Checkbox from "../../components/Checkbox/Checkbox";

const ICON_HEIGHT = 150;

const Feature = ({ icon, text }) => (
  <>
    {icon}
    <p>{text}</p>
  </>
);

const ProductInformation = ({ goForward }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const { t } = useTranslation();

  const onTermsCheckChange = () => setTermsAccepted((prevState) => !prevState);
  return (
    <div className="ProductInfo">
      <div className="ProductInfo-content">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="h1-sub">{t("PasswordManagerTitle")}</h1>
            </Col>
          </Row>
          <Row className="Features">
            <Col xs={12} sm={6} className="Features-column">
              <Feature
                icon={<HumanIcon height={ICON_HEIGHT} />}
                text={t("PI_Feature1")}
              />
            </Col>
            <Col xs={12} sm={6} className="Features-column">
              <Feature
                icon={<LockIcon height={ICON_HEIGHT} />}
                text={t("PI_Feature2")}
              />
            </Col>
          </Row>

          <Row style={{ marginBottom: 20 }}>
            <Col xs={12}>
              <h3>{t("PI_Subtitle1")}</h3>
            </Col>
            <Col>
              <p style={{ marginTop: 10 }}>{t("PI_Text1")}</p>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <h3>{t("PI_Subtitle2")}</h3>
            </Col>
            <Col>
              <p style={{ marginTop: 10 }}>{t("PI_Text2")}</p>
            </Col>
          </Row>

          <Row style={{ marginTop: 25 }}>
            <Col>
              <Checkbox
                checked={termsAccepted}
                onChange={onTermsCheckChange}
                label={t("PI_Data_Protection")}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <ButtonContainer
        submitButton={
          <Button
            type="filled"
            endAddornment={<ArrowRight fill="#fff" width="24" height="24" />}
            onClick={goForward}
            disabled={!termsAccepted}
          >
            {t("Wizard_Next_Button")}
          </Button>
        }
      />
    </div>
  );
};

Feature.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
};

ProductInformation.propTypes = {
  index: PropTypes.number,
  goForward: PropTypes.func,
  goBackwards: PropTypes.func,
  restart: PropTypes.func,
};

export default ProductInformation;
