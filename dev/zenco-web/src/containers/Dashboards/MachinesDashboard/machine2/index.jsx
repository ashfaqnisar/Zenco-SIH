import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Container, Row} from 'reactstrap';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

import LiveStatusText from './components/LiveStatusText';
import UsageStatusText from './components/UsageStatusText'
import MachineConsumption from './components/MachineConsumption'


const DefaultDashboard = ({t}) => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">{t('machine.page_title_2')}</h3>
            </Col>
        </Row>
        <Row>
            <LiveStatusText/>
            <UsageStatusText/>
            <MachineConsumption/>
        </Row>
    </Container>
);

DefaultDashboard.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(DefaultDashboard);

