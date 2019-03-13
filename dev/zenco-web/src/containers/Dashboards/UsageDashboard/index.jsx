import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import {translate} from 'react-i18next';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteCryptoTableData} from '../../../redux/actions/cryptoTableActions';
import {CryptoTableProps} from '../../../shared/prop-types/TablesProps';
import EnergyConsumedTabs from './components/EnergyConsumedTabs';
import SolarProducedTabs from './components/SolarProducedTabs';


class CryptoDashboard extends PureComponent {
    static propTypes = {
        t: PropTypes.func.isRequired,
        cryptoTable: CryptoTableProps.isRequired,
        dispatch: PropTypes.func.isRequired,
    };
    
    onDeleteCryptoTableData = (index, e) => {
        e.preventDefault();
        const arrayCopy = [...this.props.cryptoTable];
        arrayCopy.splice(index, 1);
        this.props.dispatch(deleteCryptoTableData(arrayCopy));
    };
    
    render() {
        const {t} = this.props;
        
        return (
            <Container className="dashboard">
                <Row>
                    <Col md={12}>
                        <h3 className="page-title">{t('dashboard_crypto.page_title')}</h3>
                    </Col>
                </Row>
                <Row>
                    <EnergyConsumedTabs/>
                    <SolarProducedTabs/>
                
                </Row>
            </Container>
        );
    }
}

export default connect(state => ({
    cryptoTable: state.cryptoTable.items,
}))(translate('common')(CryptoDashboard));
