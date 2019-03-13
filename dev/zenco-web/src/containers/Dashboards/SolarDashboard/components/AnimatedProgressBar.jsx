import React from 'react';
import {Card, CardBody, Col, Container, Progress, Row} from 'reactstrap';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

const AnimatedProgressBar = ({t}) => (
    <Container>
        <Row>
            <Col md={12} lg={6}>
                <Card>
                    <CardBody>
                        <div className="card__title">
                            <h5 className="bold-text">{t('ui_elements.progress_bars.animated_progress_bar')}</h5>
                            <h5 className="subhead">Use default progress with property <span
                                className="red-text">animated</span></h5>
                        </div>
                        <div className="progress-wrap progress-wrap--middle">
                            <Progress animated value={70}/>
                        </div>
                    </CardBody>
                </Card>
            </Col></Row>
        <Row>
            <Col md={12} lg={6}>
                <Card>
                    <CardBody>
                        <div className="card__title">
                            <h5 className="bold-text">{t('ui_elements.progress_bars.animated_progress_bar')}</h5>
                            <h5 className="subhead">Use default progress with property <span
                                className="red-text">animated</span></h5>
                        </div>
                        <div className="progress-wrap progress-wrap--middle">
                            <Progress animated value={70}/>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    
    </Container>
);

AnimatedProgressBar.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(AnimatedProgressBar);
