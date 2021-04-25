import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { ReactComponent as LockIcon } from '../../assets/img/icon1.svg';
import { ReactComponent as HumanIcon } from '../../assets/img/icon2.svg';
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";

import './ProductInformation.scss';

const ProductInformation = () => {
    return (
        <div className="ProductInfo">
            <div className="ProductInfo-content">
                <Container fluid>
                    <Row>
                        <Col>
                            <h1>Crea tu Password Manager</h1>
                        </Col>
                    </Row>
                    <Row className="Features">
                        <Col xs={6} className="Features-column">
                            <HumanIcon height={150} />
                            <p>Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas</p>
                        </Col>
                        <Col xs={6} className="Features-column">
                            <LockIcon height={150} />
                            <p>Crea tu clave maestra: sólo tú podrás acceder a tus secretos con ella</p>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: 20 }}>
                        <Col xs={12}><h3>Cómo funciona</h3></Col>
                        <Col><p style={{ marginTop: 10}}>En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdela bien.</p></Col>
                    </Row>

                    <Row>
                        <Col xs={12}><h3>Qué datos puedes guardar</h3></Col>
                        <Col><p style={{ marginTop: 10}}>Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en un lugar seguro.</p></Col>
                    </Row>
                </Container>
            </div>
            <ButtonContainer />
        </div>
    )
}

export default ProductInformation;