import React from 'react';
import {Card, CardBody, Col, Container, Row} from 'reactstrap';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

const UsageStatusText = ({t}) => (
    <Col md={12} lg={6}>
        <Card>
            <CardBody>
                <div className="card__title typography--inline">
                    <h3 className="bold-text">{t('machine.usage_heading')}</h3>
                    <p className="heading-sub" style={{color: "#999999",}}>This Month</p>
                </div>
                <Container>
                    <Row>
                        <Col sm={9}>
                            <div className="typography-card give-padding text-left">
                                <h3 className="bold-text">Times On </h3>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="typography-card give-padding text-right">
                                <h3 className="bold-text">48 Hours</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <div className="typography-card give-padding">
                                <h3 className="bold-text">Total Usage</h3>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="typography-card give-padding text-right">
                                <h3 className="bold-text">10.5kW</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <div className="typography-card give-padding">
                                <h3 className="bold-text">Total Cost</h3>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="typography-card give-padding text-right">
                                <h3 className="bold-text">10000₹</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </CardBody>
        </Card>
    </Col>
);

UsageStatusText.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(UsageStatusText);
