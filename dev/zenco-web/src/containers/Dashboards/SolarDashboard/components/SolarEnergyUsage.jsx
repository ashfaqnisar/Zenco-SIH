import React from 'react';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';
import {Col, Row} from "reactstrap";
import SmallBars from "./SmallBars";

const SolarEnergyUsage = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <SolarEnergyUsageList {...mappedData}/>)}
        </React.Fragment>
    )
};

const SolarEnergyUsageList = (props) => (
    
    <Col xl={6} lg={6} md={12} sm={12}>
        <Row>
            <Panel
                title={"Solar Energy Exported"}
                subhead="The amount of solar energy which is being exported to the grid.">
                <Row>
                    <p className="dashboard__bounce-percent ">{props.solar_energy_exported}kW</p>
                </Row>
            
            </Panel>
        </Row>
        <Row className="align-content-end">
            <Panel
                title={"Electrical Energy Imported"}
                subhead="The amount of electrical energy which is being consumed.">
                <p className="dashboard__bounce-percent">{props.electrical_energy_imported}kW</p>
            </Panel>
        </Row>
    </Col>
);

SolarEnergyUsage.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(SolarEnergyUsage);
