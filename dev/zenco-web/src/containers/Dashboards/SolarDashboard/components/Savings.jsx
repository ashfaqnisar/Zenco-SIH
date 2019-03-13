import React from 'react';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const Savings = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <SavingsList {...mappedData}/>)}
        </React.Fragment>
    )
};

const SavingsList = (props) => (
    <Panel md={12} lg={7} xl={4} sm={12} xs={12} title={"Savings"}>
        <div className="dashboard__sales-report">
            <div className="progress-wrap progress-wrap--big" style={{margin: "2rem"}}>
                <p className="dashboard__sales-report-title text-center">Total Savings</p>
                <p className="dashboard__booking-reservations-number text-center">{props.savings} ₹</p>
                <p className="dashboard__sales-report-plan text-center">Total Energy Saved(Approximately)</p>
            </div>
        </div>
    </Panel>
);

Savings.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(Savings);
