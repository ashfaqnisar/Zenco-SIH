import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import {BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid} from 'recharts';
import classnames from 'classnames';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import axios from 'axios'

const MachineConsumption = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <MachineDatalist {...mappedData}/>)}
        </React.Fragment>
    )
};

function message() {
    axios.get("http://api.msg91.com/api/sendhttp.php?country=91&sender=mZenco&route=4&mobiles=8328277518&authkey=265622A2U8HdDM5c7bac4f&message=Overload Alert !Machine-1(OES0045) switched to OVERLOAD.Reduce the load or place the load in parallel to avoid energy waste. For complete details : www.ezerka.org&campaign=mZencohttps://sokt.io/1aokTe7yEHuxYeUHZ4w2/personal-overload")
}


class MachineDatalist extends PureComponent {
    state = {
        activeTab: '1',
        yearly: true,
    };
    
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
        return (
            <Col md={12} lg={12} xl={12}>
                <Card>
                    <CardBody>
                        <div className="card__title">
                            <h5 className="bold-text">Energy Consumed</h5>
                        </div>
                        <div className="tabs tabs--justify tabs--bordered-bottom">
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
                                                <BarChart data={this.props.dataMonthly} margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={true} tickFormatter={this.tickFormer}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="uv" name="Sales" fill="#ff4861" barSize={10}/>
                                                </BarChart>
                                                :
                                                <BarChart data={this.props.dataYearly} margin={{top: 20, left: -15}}>
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
                                                <BarChart data={this.props.dataMonthly} margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={true} tickFormatter={this.tickFormer}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="uv" name="Sales" fill="#ff4861" barSize={10}/>
                                                </BarChart>
                                                :
                                                <BarChart data={this.props.dataYearly} margin={{top: 20, left: -15}}>
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
                                                <BarChart data={this.props.dataYearly} margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={true} tickFormatter={this.tickFormer}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="uv" name="Sales" fill="#ff4861" barSize={10}/>
                                                </BarChart>
                                                :
                                                <BarChart data={this.props.dataYearly} margin={{top: 20, left: -15}}>
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
                                                <BarChart data={this.props.dataYearly} margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={true} tickFormatter={this.tickFormer}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="uv" name="Energy" fill="#ff4861" barSize={10}/>
                                                </BarChart>
                                                :
                                                <BarChart data={this.props.dataYearly} margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="uv" name="Energy" fill="#4ce1b6" barSize={4}/>
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

export default translate('common')(MachineConsumption);
