import React from 'react';
import {Card, CardBody, Col, Container, Row} from 'reactstrap';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

const UsageStatusText = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <UsageStatus{...mappedData}/>)}
        </React.Fragment>
    )
};

const UsageStatus = (props) => (
    <Col md={12} lg={6}>
        <Card>
            <CardBody>
                <div className="card__title typography--inline">
                    <h3 className="bold-text">Usage</h3>
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
                                <h3 className="bold-text">{props.times_on} Hours</h3>
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
                                <h3 className="bold-text">{props.total_usage} kW</h3>
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
                                <h3 className="bold-text">{props.total_cost} ₹</h3>
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
