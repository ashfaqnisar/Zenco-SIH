import React, {PureComponent} from 'react';
import {BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid} from 'recharts';
import {Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

const dataYearly = [
    {name: 'Jan', uv: 4000},
    {name: 'Feb', uv: 3000},
    {name: 'Mar', uv: 2000},
    {name: 'Apr', uv: 2780},
    {name: 'May', uv: 1890},
    {name: 'June', uv: 2390},
    {name: 'July', uv: 3490},
    {name: 'Aug', uv: 2000},
    {name: 'Sep', uv: 2780},
    {name: 'Oct', uv: 1890},
    {name: 'Nov', uv: 3578},
    {name: 'Dec', uv: 2378},
];

const dataMonthly = [
    {name: '01.02', uv: 3654},
    {name: '02.02', uv: 2578},
    {name: '03.02', uv: 2000},
    {name: '04.02', uv: 4383},
    {name: '05.02', uv: 1890},
    {name: '06.02', uv: 2390},
    {name: '07.02', uv: 3490},
    {name: '08.02', uv: 2000},
    {name: '09.02', uv: 2780},
    {name: '10.02', uv: 1890},
    {name: '11.02', uv: 3578},
    {name: '12.02', uv: 3644},
    {name: '13.02', uv: 4000},
    {name: '14.02', uv: 3000},
    {name: '15.02', uv: 2000},
    {name: '16.02', uv: 2780},
    {name: '17.02', uv: 1890},
    {name: '18.02', uv: 2390},
    {name: '19.02', uv: 3490},
    {name: '20.02', uv: 2000},
    {name: '21.02', uv: 2780},
    {name: '22.02', uv: 1890},
    {name: '23.02', uv: 3578},
    {name: '24.02', uv: 2390},
    {name: '25.02', uv: 3578},
    {name: '26.02', uv: 1890},
    {name: '27.02', uv: 4000},
    {name: '28.02', uv: 2378},
];

class SolarProducedTabs extends PureComponent {
    static propTypes = {
        t: PropTypes.func.isRequired,
    };
    
    constructor() {
        super();
        this.state = {
            activeTab: '1',
            yearly: true,
        };
    }
    
    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    };
    handleChange = () => {
        this.setState({yearly: !this.state.yearly});
    };
    tickFormer = (tick) => {
        return `${tick / 1000}kW`;
    };
    
    render() {
        const {t} = this.props;
        
        return (
            <Col md={12} lg={12} xl={12}>
                <Card>
                    <CardBody>
                        <div className="card__title">
                            <h5 className="bold-text">{t('dashboard_crypto.solarproducedstats')}</h5>
                            <h5 className="subhead">These stats are used to understand, how much amount of energy has
                                been produced.</h5>
                        </div>
                        <div className="tabs tabs--justify tabs--bordered-top">
                            <div className="tabs__wrap">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: this.state.activeTab === '1'})}
                                            onClick={() => {
                                                this.toggle('1');
                                            }}
                                        >
                                            Day
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: this.state.activeTab === '2'})}
                                            onClick={() => {
                                                this.toggle('2');
                                            }}
                                        >
                                            Week
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: this.state.activeTab === '3'})}
                                            onClick={() => {
                                                this.toggle('3');
                                            }}
                                        >
                                            Month
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: this.state.activeTab === '4'})}
                                            onClick={() => {
                                                this.toggle('4');
                                            }}
                                        >
                                            Year
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <ResponsiveContainer height={260}>
                                            {this.state.yearly ?
                                                <BarChart data={dataMonthly} margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={true} tickFormatter={this.tickFormer}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="uv" name="Sales" fill="#4ce1b6" barSize={10}/>
                                                </BarChart>
                                                :
                                                <BarChart data={dataYearly} margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="uv" name="Sales" fill="#4ce1b6" barSize={4}/>
                                                </BarChart>
                                            }
                                        </ResponsiveContainer>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <ResponsiveContainer height={260}>
                                            {this.state.yearly ?
                                                <BarChart data={dataYearly} margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false} tickFormatter={this.tickFormer}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="uv" name="Sales" fill="#ff4861" barSize={10}/>
                                                </BarChart>
                                                :
                                                <BarChart data={dataMonthly} margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="uv" name="Sales" fill="#4ce1b6" barSize={4}/>
                                                </BarChart>
                                            }
                                        </ResponsiveContainer>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <ResponsiveContainer height={260}>
                                            {this.state.yearly ?
                                                <BarChart data={dataYearly} margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false} tickFormatter={this.tickFormer}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="uv" name="Sales" fill="#ff4861" barSize={10}/>
                                                </BarChart>
                                                :
                                                <BarChart data={dataMonthly} margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="uv" name="Sales" fill="#4ce1b6" barSize={4}/>
                                                </BarChart>
                                            }
                                        </ResponsiveContainer>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <ResponsiveContainer height={260}>
                                            {this.state.yearly ?
                                                <BarChart data={dataYearly} margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false} tickFormatter={this.tickFormer}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="uv" name="Sales" fill="#ff4861" barSize={10}/>
                                                </BarChart>
                                                :
                                                <BarChart data={dataMonthly} margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="uv" name="Sales" fill="#4ce1b6" barSize={4}/>
                                                </BarChart>
                                            }
                                        </ResponsiveContainer>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default translate('common')(SolarProducedTabs);
