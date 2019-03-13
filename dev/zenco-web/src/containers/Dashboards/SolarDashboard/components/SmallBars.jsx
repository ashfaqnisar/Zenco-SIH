/* eslint-disable react/no-array-index-key */
import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Row} from 'reactstrap';
import {BarChart, Bar, Cell, ResponsiveContainer} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

const data = [
    {name: 'Page A', pv: 561},
    {name: 'Page B', pv: 452},
    {name: 'Page C', pv: 154},
    {name: 'Page D', pv: 256},
    {name: 'Page E', pv: 545},
    {name: 'Page F', pv: 438},
    {name: 'Page G', pv: 523},
    {name: 'Page H', pv: 226},
    {name: 'Page I', pv: 548},
    {name: 'Page J', pv: 354},
    {name: 'Page A', pv: 561},
    {name: 'Page B', pv: 452},
    {name: 'Page C', pv: 154},
    {name: 'Page D', pv: 256},
    {name: 'Page E', pv: 545},
    {name: 'Page F', pv: 438},
    {name: 'Page G', pv: 523},
    {name: 'Page H', pv: 226},
    {name: 'Page I', pv: 548},
    {name: 'Page J', pv: 354},

];

class SmallBars extends PureComponent {
    static propTypes = {
        t: PropTypes.func.isRequired,
    };
    
    constructor() {
        super();
        this.state = {
            activeIndex: 0,
        };
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(index) {
        this.setState({
            activeIndex: index,
        });
    }
    
    render() {
        const {activeIndex} = this.state;
        
        return (
            <Col md={9} xl={9} lg={6} xs={12}>
                <Row>
                    <ResponsiveContainer height={50} className="dashboard__chart-container">
                        <BarChart data={data}>
                            <Bar dataKey="pv" onClick={this.handleClick}>
                                {
                                    data.map((entry, index) => (
                                        <Cell
                                            cursor="pointer"
                                            fill={index === activeIndex ? '#f6da6e' : '#4ce1b6'}
                                            key={`cell-${index}`}
                                        />
                                    ))
                                }
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </Row>
                <Row>
                    <ResponsiveContainer height={50} className="dashboard__chart-container">
                        <BarChart data={data}>
                            <Bar dataKey="pv" onClick={this.handleClick}>
                                {
                                    data.map((entry, index) => (
                                        <Cell
                                            cursor="pointer"
                                            fill={index === activeIndex ? '#f6da6e' : '#4ce1b6'}
                                            key={`cell-${index}`}
                                        />
                                    ))
                                }
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </Row>
            </Col>
        );
    }
}

export default translate('common')(SmallBars);
