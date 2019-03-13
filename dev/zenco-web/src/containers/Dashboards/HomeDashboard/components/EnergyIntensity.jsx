/* eslint-disable react/no-array-index-key */
import React from 'react';
import {PieChart, Pie} from 'recharts';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const pieChartData = [{value: 60, fill: '#b8e986'},
    {value: 40, fill: '#f2f4f7'}];

const EnergyIntensity = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <Datalist {...mappedData}/>)}
        </React.Fragment>
    )
};


const Datalist = (props) => (
    <Panel
        lg={6}
        xl={4}
        md={12}
        title={"Energy Intensity"}
        subhead="Last 10 minutes"
    >
        <div className="dashboard__current-users pd-top-50">
            <div className="dashboard__current-users-chart">
                <PieChart height={150} width={280}>
                    <Pie
                        data={pieChartData}
                        dataKey="value"
                        cx={135}
                        cy={140}
                        startAngle={180}
                        endAngle={0}
                        innerRadius={100}
                        outerRadius={128}
                        paddingAngle={0}
                    />
                </PieChart>
            </div>
            <div className="dashboard__current-users-info">
                <p className="dashboard__current-users-day">
                    <span>Min</span>
                    <span>0</span>
                </p>
                <p className="dashboard__current-users-day">
                    <span>Max</span>
                    <span>500</span>
                </p>
            </div>
        </div>
        <h1 className="dashboard__current-users-label text-center pd-top-10">{props.energy_intensity} kWh/Sqft</h1>
    
    </Panel>
);

EnergyIntensity.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(EnergyIntensity);
