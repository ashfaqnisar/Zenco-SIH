import React from 'react';
import {PieChart, Pie} from 'recharts';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const data01 = [{value: 90, fill: '#4ce1b6'},
    {value: 10, fill: '#ff4861'}];

const BudgetStatistic = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <BudgetStatisticList {...mappedData}/>)}
        </React.Fragment>
    )
};

const BudgetStatisticList = (props) => (
    <Panel md={12} lg={6} xl={6} title={"Payback Period"}>
        <div className="dashboard__stat dashboard__stat--budget">
            <div className="dashboard__stat-main">
                <p className="dashboard__stat-main-title">Total Cost Invested In the Solar Energy</p>
                <p className="dashboard__stat-main-number">20 Lakhs₹</p>
                <hr/>
            </div>
            <div className="dashboard__stat-chart">
                <PieChart height={120} width={120}>
                    <Pie data={data01} dataKey="value" cx={55} cy={55} innerRadius={50} outerRadius={60}/>
                </PieChart>
                <p className="dashboard__stat-label">₹</p>
            </div>
            <div className="dashboard__stat-data">
                <div>
                    <p className="dashboard__stat-data-number">2 Lakhs₹</p>
                    <p style={{color: '#4ce1b6'}}>Received Cost</p>
                </div>
                <div>
                    <p className="dashboard__stat-data-number">18 lakhs₹</p>
                    <p style={{color: '#ff4861'}}>Remaining Cost</p>
                </div>
            </div>
        </div>
    </Panel>
);

BudgetStatistic.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(BudgetStatistic);
