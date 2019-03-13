/* eslint-disable react/no-array-index-key */
import React from 'react';
import {Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from 'recharts';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import ArrowDownwardIcon from 'mdi-react/ArrowDownwardIcon';
import Panel from '../../../../shared/components/Panel';
import OurMission from './OurMission';

const data = [
    {name: 'Completed', value: 2500, fill: '#b8e986'},
    {name: 'Online check-in', value: 2500, fill: '#4ce1b6'},
    {name: 'Remain', value: 5000, fill: '#f2f4f7'},
];

const style = {
    left: 0,
    marginTop: '-5px',
    lineHeight: '16px',
};

const renderLegend = ({payload}) => (
    <ul className="dashboard__booking-reservations-chart-legend dashboard__chart-legend">
        {
            payload.map((entry, index) => (
                <li key={`item-${index}`}>
                    <span style={{backgroundColor: entry.color}}/>
                    <p>{entry.value}</p>
                </li>
            ))
        }
    </ul>
);

renderLegend.propTypes = {
    payload: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string,
        vslue: PropTypes.string,
    })).isRequired,
};

const Reservations = ({t}) => (
    <Panel
        lg={6}
        xl={3}
        md={12}
        title={t('dashboard_booking.reservations')}
        subhead="Reservation overview"
        before={<OurMission/>}
        panelClass="dashboard__booking-reservations-panel"
    >
        <div className="dashboard__booking-reservations">
            <p className="dashboard__booking-reservations-title">Total visitors on 23.08.2018</p>
            <p className="dashboard__booking-reservations-number">345</p>
            <div className="dashboard__booking-reservations-chart">
                <ResponsiveContainer>
                    <PieChart className="dashboard__booking-reservations-chart-container">
                        <Tooltip/>
                        <Pie
                            data={data}
                            dataKey="value"
                            cy={80}
                            innerRadius={47}
                            outerRadius={65}
                        />
                        <Legend
                            layout="vertical"
                            verticalAlign="middle"
                            wrapperStyle={style}
                            content={renderLegend}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <a href="/" className="dashboard__booking-reservations-link">
                    Download report <ArrowDownwardIcon className="dashboard__booking-reservations-link-icon"/>
                </a>
            </div>
        </div>
    </Panel>
);

Reservations.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(Reservations);
