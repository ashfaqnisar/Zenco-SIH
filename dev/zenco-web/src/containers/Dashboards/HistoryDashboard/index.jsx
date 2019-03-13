import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import TimelineHistory from './components/TimelineHistory'

class BookingDashboard extends PureComponent {
    static propTypes = {
        t: PropTypes.func.isRequired,
    };
    
    render() {
        const {t} = this.props;
        
        return (
            <Container className="dashboard">
                <Row>
                    <Col md={12}>
                        <h3 className="page-title">{t('dashboard_booking.page_title')}</h3>
                    </Col>
                </Row>
                <Row>
                    <TimelineHistory/>
                </Row>
            </Container>
        );
    }
}

export default translate('common')(BookingDashboard);
