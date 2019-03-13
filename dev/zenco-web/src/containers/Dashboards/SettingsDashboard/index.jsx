import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import CurrentUsers from './components/CurrentUsers';
import ActiveUsers from './components/ActiveUsers';
import SessionShort from './components/SessionShort';
import ActiveUsersShort from './components/ActiveUsersShort';
import NewUsersShort from './components/NewUsersShort';
import PageViewsShort from './components/PageViewsShort';
import AppTileClicks from './components/AppTileClicks';
import WeeklyStatMobile from './components/WeeklyStatMobile';
import SocialMarketing from './components/SocialMarketing';

const MobileAppDashboard = ({t}) => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">{t('dashboard_mobile_app.page_title')}</h3>
            </Col>
        </Row>
        <Row>
            <CurrentUsers/>
            <ActiveUsers/>
        </Row>
        <Row>
            <SessionShort/>
            <ActiveUsersShort/>
            <NewUsersShort/>
            <PageViewsShort/>
        </Row>
        <Row>
            <AppTileClicks/>
            <WeeklyStatMobile/>
            <SocialMarketing/>
        </Row>
    </Container>
);

MobileAppDashboard.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(MobileAppDashboard);

