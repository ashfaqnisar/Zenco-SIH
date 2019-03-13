import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const data = [
    {name: '08:30', uv: 6000},
    {name: '09:00', uv: 3000},
    {name: '09:30', uv: 2000},
    {name: '10:00', uv: 2780},
    {name: '10:30', uv: 1890},
    {name: '11:00', uv: 2390},
    {name: '11:30', uv: 3490},
    {name: '12:00', uv: 3490},
    {name: '12:30', uv: 3490},
    {name: '13:00', uv: 3490},
    {name: '13:30', uv: 1890},
    {name: '14:00', uv: 2390},
    {name: '14:30', uv: 3576},
    {name: '15:00', uv: 4679},
    {name: '15:00', uv: 4679},
];

const SolarEnergyProduction = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <SolarEnergyList {...mappedData}/>)}
        </React.Fragment>
    )
};

const tickFormer = (tick) => {
    return `${tick / 1000}kW`;
};

const SolarEnergyList = (props) => (
    
    <Panel xl={6} lg={6} md={12} sm={6}
           title={"Solar Energy Produced"}
           subhead="The percentage of energy which is being produced."
    >
        <p className="dashboard__bounce-percent add_the_margin">{props.solar_energy_produced}kW</p>
        <ResponsiveContainer height={220} className="dashboard__area">
            <AreaChart
                data={data}
                margin={{
                    top: 0, right: 0, left: -15, bottom: 0,
                }}
            >
                <XAxis dataKey="name" tickLine={false}/>
                <YAxis tickLine={true} tickFormatter={tickFormer}/>
                <CartesianGrid vertical={false}/>
                <Tooltip/>
                <Area type="monotone" dataKey="uv" stroke="#24d6a3" fill="#4ce1b6" fillOpacity={0.3}/>
            </AreaChart>
        </ResponsiveContainer>
    </Panel>
);

SolarEnergyProduction.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(SolarEnergyProduction);
