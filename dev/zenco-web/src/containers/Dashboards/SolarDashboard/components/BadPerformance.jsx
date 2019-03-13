import React from 'react';
import {Card, CardBody, Col, Row} from 'reactstrap';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

const bad = `${process.env.PUBLIC_URL}/img/performance/bad.png`;

const GoodPerformance = ({t}) => (
    <Col md={12} lg={6}>
        <Card>
            <CardBody>
                <div className="card__title">
                    <h5 className="bold-text">{t('solar_energy.performance_check')}</h5>
                </div>
                <Row>
                    <div>
                        <img className="performance_check_image pd-top-30" src={bad} alt={"Correct"}/>
                    </div>
                    <div className="typography-card pd-top-40">
                        <h1>Bad Performance </h1>
                        <h3>To be updated</h3>
                    </div>
                </Row>
                <Row>
                
                </Row>
            </CardBody>
        </Card>
    </Col>
);

GoodPerformance.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(GoodPerformance);
