import React from 'react';
import {PieChart, Pie, ResponsiveContainer} from 'recharts';
import {Card, CardBody, Col} from 'reactstrap';
import WalkIcon from 'mdi-react/WalkIcon';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

const SolarEnergy = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <Datalist {...mappedData}/>)}
        </React.Fragment>
    )
};

const data = [{value: 50, fill: '#4ce1b6'},
    {value: 50, fill: '#eeeeee'}];

const Datalist = (props) => (
    <Col md={12} xl={3} lg={6} sm={12} xs={12}>
        <Card>
            <CardBody className="dashboard__health-chart-card">
                <div className="card__title">
                    <h5 className="bold-text">Solar Energy</h5>
                </div>
                <div className="dashboard__health-chart">
                    <ResponsiveContainer height={180}>
                        <PieChart>
                            <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90}/>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="dashboard__health-chart-info">
                        <WalkIcon style={{fill: '#4ce1b6'}}/>
                        <p className="dashboard__health-chart-number">{props.solar_production}</p>
                        <p className="dashboard__health-chart-units">kW</p>
                    </div>
                </div>
                <p className="dashboard__goal">Estimated Production: {props.estimated_solar_cost} kWh</p>
            </CardBody>
        </Card>
    </Col>
);

SolarEnergy.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(SolarEnergy);
