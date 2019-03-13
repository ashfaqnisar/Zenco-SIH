/* eslint-disable react/no-array-index-key */
import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

function getRandomArbitrary(minValue, maxValue) {
    const ratio = (maxValue - minValue) + minValue;
    return Math.random() * ratio;
}

function generateRandomData(dataLength, minDeviationValue, maxDeviationValue, minRange, maxRange) {
    const rangeFactor = (maxRange - minRange) / dataLength;
    
    return Array.from({length: dataLength}, (v, k) => (
        {
            name: k,
            point: (k * rangeFactor) + getRandomArbitrary(minDeviationValue, maxDeviationValue),
            amt: 2000,
        }));
}

const data = generateRandomData(5, -2, 2, 10, 20);

const graph_data = [
    {
        name: 1,
        point: 10
    },
    {
        name: 5,
        point: 15
    }, {
        name: 5,
        point: 13
    }, {
        name: 5,
        point: 12
    }, {
        name: 5,
        point: 10
    },

];

function tickFormer(tick) {
    return `${tick / 100}W`;
}

const LiveUsage = (props) => (
    <Panel
        lg={12}
        xl={12}
        md={12}
        title={"Live Usage"}
        subhead="The total amount of energy consumed by all the machines."
    >
        <ResponsiveContainer height={190} className="dashboard__active-users-chart">
            <LineChart
                height={195}
                data={graph_data}
            >
                <YAxis
                    tickLine={false}
                    tickFormatter={tickFormer}
                    interval="preserveStartEnd"
                    width={48}
                    tick={{transform: 'translate(-20, 0)', fontSize: 12}}
                />
                <XAxis
                    hide
                    padding={{left: 30, right: 30}}
                />
                <CartesianGrid vertical={false}/>
                <Tooltip/>
                <Line type="linear" dataKey="point" dot={false} stroke="#b8e986" strokeWidth={2}/>
            </LineChart>
        </ResponsiveContainer>
    </Panel>
);

LiveUsage.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(LiveUsage);
