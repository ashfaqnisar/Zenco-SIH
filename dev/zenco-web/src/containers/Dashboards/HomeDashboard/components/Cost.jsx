import React from 'react';
import {PieChart, Pie, ResponsiveContainer} from 'recharts';
import {Card, CardBody, Col} from 'reactstrap';
import MapMarkerRadiusIcon from 'mdi-react/MapMarkerRadiusIcon';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

const data = [{value: 5.5, fill: '#70bbfd'},
    {value: 4.5, fill: '#eeeeee'}];

const Cost = (props) => {
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
                    <h5 className="bold-text">Cost</h5>
                </div>
                <div className="dashboard__health-chart">
                    <ResponsiveContainer height={180}>
                        <PieChart>
                            <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90}/>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="dashboard__health-chart-info">
                        <MapMarkerRadiusIcon style={{fill: '#70bbfd'}}/>
                        <p className="dashboard__health-chart-number">₹{props.cost}</p>
                        <p className="dashboard__health-chart-units">Rupees</p>
                    </div>
                </div>
                <p className="dashboard__goal">Estimated Cost: {props.estimated_cost} ₹</p>
            </CardBody>
        </Card>
    </Col>
);

Cost.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(Cost);
