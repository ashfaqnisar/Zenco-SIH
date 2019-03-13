import React from 'react';
import {PieChart, Pie, ResponsiveContainer} from 'recharts';
import {Card, CardBody, Col} from 'reactstrap';
import HeartOutlineIcon from 'mdi-react/HeartOutlineIcon';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

const data = [{value: 68, fill: '#ff4861'},
    {value: 32, fill: '#eeeeee'}];

const Efficiency = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <Datalist {...mappedData}/>)}
        </React.Fragment>
    )
};


const Datalist = (props) => (
    <Col md={12} xl={3} lg={6} sm={12} xs={12}>
        <Card>
            <CardBody className="dashboard__health-chart-card">
                <div className="card__title">
                    <h5 className="bold-text">Efficiency</h5>
                </div>
                <div className="dashboard__health-chart">
                    <ResponsiveContainer height={180}>
                        <PieChart>
                            <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90}/>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="dashboard__health-chart-info">
                        <HeartOutlineIcon style={{fill: '#ff4861'}}/>
                        <p className="dashboard__health-chart-number">{props.efficiency}%</p>
                        <p className="dashboard__health-chart-units">EUI</p>
                    </div>
                </div>
                <p className="dashboard__goal">To be updated</p>
            </CardBody>
        </Card>
    </Col>
);

Efficiency.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(Efficiency);
