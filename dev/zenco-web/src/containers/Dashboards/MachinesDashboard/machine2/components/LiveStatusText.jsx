import React from 'react';
import {Card, CardBody} from 'reactstrap';
import {Col, Container, Row} from 'reactstrap';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

const LiveStatusText = ({t}) => (
    <Col md={12} lg={6}>
        <Card>
            <CardBody>
                <div className="card__title">
                    <h2 className="bold-text">{t('machine.stats_heading')}</h2>
                </div>
                <Container>
                    <Row>
                        <Col sm={9}>
                            <div className="typography-card give-padding text-left">
                                <h3 className="bold-text">Device Active for </h3>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="typography-card give-padding text-right">
                                <h3 className="bold-text">3 Hours</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <div className="typography-card give-padding">
                                <h3 className="bold-text">Average Consumption</h3>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="typography-card give-padding text-right">
                                <h3 className="bold-text">1kW</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <div className="typography-card give-padding">
                                <h3 className="bold-text">Average Run-time</h3>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="typography-card give-padding text-right">
                                <h3 className="bold-text">2 Hours</h3>
                            </div>
                        </Col>
                    </Row>
                
                </Container>
            </CardBody>
        </Card>
    </Col>
);

LiveStatusText.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(LiveStatusText);
