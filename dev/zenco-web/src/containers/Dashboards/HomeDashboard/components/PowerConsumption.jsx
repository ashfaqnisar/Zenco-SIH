import React from 'react';
import {PieChart, Pie, ResponsiveContainer} from 'recharts';
import {Card, CardBody, Col} from 'reactstrap';
import FlashIcon from 'mdi-react/FlashIcon';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

const data = [{value: 30, fill: '#f6da6e'},
    {value: 70, fill: '#eeeeee'}];

const PowerConsumption = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <Datalist {...mappedData}/>)}
        </React.Fragment>)
};

const Datalist = (props) => (
    <Col md={12} xl={3} lg={6} sm={12} xs={12}>
        <Card>
            <CardBody className="dashboard__health-chart-card">
                <div className="card__title">
                    <h5 className="bold-text">Power Consumption</h5>
                </div>
                <div className="dashboard__health-chart">
                    <ResponsiveContainer height={180}>
                        <PieChart>
                            <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90}/>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="dashboard__health-chart-info">
                        <FlashIcon style={{fill: '#f6da6e'}}/>
                        <p className="dashboard__health-chart-number">{props.consumption}</p>
                        <p className="dashboard__health-chart-units">kWh</p>
                    </div>
                </div>
                <p className="dashboard__goal">Estimated Consumption: {props.estimatedConsumption} kWh</p>
            </CardBody>
        </Card>
    </Col>
);

PowerConsumption.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(PowerConsumption);
