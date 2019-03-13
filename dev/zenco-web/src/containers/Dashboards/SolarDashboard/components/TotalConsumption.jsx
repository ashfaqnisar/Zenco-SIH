import React from 'react';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const TotalConsumption = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <TotalConsumptionList {...mappedData}/>)}
        </React.Fragment>
    )
};

const TotalConsumptionList = (props) => (
    <Panel md={12} lg={7} xl={4} sm={12} xs={12} title={"Total Consumption"}>
        <div className="dashboard__sales-report">
            <div className="progress-wrap progress-wrap--big " style={{margin: "2rem"}}>
                <p className="dashboard__sales-report-title text-center">Total</p>
                <p className="dashboard__booking-reservations-number text-center">{props.total_consumption} kWh</p>
                <p className="dashboard__sales-report-plan text-center">Total Energy consumed(Approximately)</p>
            </div>
        </div>
    </Panel>
);

TotalConsumption.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(TotalConsumption);
