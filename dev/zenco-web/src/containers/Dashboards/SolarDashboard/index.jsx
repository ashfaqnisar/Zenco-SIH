import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import {translate} from 'react-i18next';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TotalConsumption from './components/TotalConsumption';
import {deleteNewOrderTableData} from '../../../redux/actions/newOrderTableActions';
import {NewOrderTableProps} from '../../../shared/prop-types/TablesProps';
import BudgetStatistics from './components/BudgetStatistic'
import Savings from './components/Savings'
import NetUsage from './components/NetUsage'
import SolarEnergyProduction from './components/SolarEnergyProduction'
import SolarEnergyUsage from "./components/SolarEnergyUsage";
import BadPerformance from "./components/BadPerformance";
import GoodPerformance from "./components/GoodPerformance";


class SolarDashboard extends PureComponent {
    static propTypes = {
        newOrder: NewOrderTableProps.isRequired,
        dispatch: PropTypes.func.isRequired,
        t: PropTypes.func.isRequired,
    };
    state = {
        solar_report: [{
            total_consumption: 124.2,
            savings: 4720,
            net_usage: 300,
            solar_energy_produced: 7,
            solar_energy_exported: 11,
            electrical_energy_imported: 36,
            total_cost_remaining: 34700,
            received_cost: 14568,
            remaining_cost: 20132
        }]
    };
    
    onDeleteRow = (index, e) => {
        e.preventDefault();
        const arrayCopy = [...this.props.newOrder];
        arrayCopy.splice(index, 1);
        this.props.dispatch(deleteNewOrderTableData(arrayCopy));
    };
    
    render() {
        
        return (
            <Container className="dashboard">
                <Row>
                    <Col md={12}>
                        <h3 className="page-title">Solar Energy Panel Report</h3>
                    </Col>
                </Row>
                <Row>
                    <TotalConsumption Data={this.state.solar_report}/>
                    <Savings Data={this.state.solar_report}/>
                    <NetUsage Data={this.state.solar_report}/>
                </Row>
                <Row>
                    <SolarEnergyProduction Data={this.state.solar_report}/>
                    <SolarEnergyUsage Data={this.state.solar_report}/>
                </Row>
                <Row>
                    <BudgetStatistics Data={this.state.solar_report}/>
                    <GoodPerformance/>
                    <BadPerformance/>
                </Row>
            </Container>
        );
    }
}

export default connect(state => ({newOrder: state.newOrder.items}))(translate('common')(SolarDashboard));
