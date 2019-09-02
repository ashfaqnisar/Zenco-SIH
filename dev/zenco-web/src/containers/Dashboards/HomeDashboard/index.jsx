import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';

import Efficiency from './components/Efficiency';
import PowerConsumption from './components/PowerConsumption';
import SolarEnergy from './components/SolarEnergy';
import LiveUsage from './components/LiveUsage';
import Cost from './components/Cost';
import ChangeInCost from './components/ChangeInCost'
import ActiveMachines from './components/ActiveMachines'
import EnergyIntensity from './components/EnergyIntensity'
import firebase from './../../../firebase'


class HomeDashboard extends React.Component {
    state = {
        home_data: [],
        home_dashboard_data: [
            {
                "estimated_consumption": 300,
                "cost": 1000,
                "estimated_cost": 3000,
                "solar_production": 50,
                "estimated_solar_cost": 100,
                "efficiency": 76,
                "changeInCost_Percentage": 40,
                "changeInCost_Money": 2000,
                "energy_intensity": 345,
                "machine_1": 11,
                "machine_2": 9.8,
                "machine_3": 9.6,
                "machine_4": 8.8,
                "machine_5": 9.0,
                "machine_6": 9.1,
            }
        ],
        liveusage_state: []
    };
    
    componentDidMount() {
        const dataRef = firebase.database().ref('home_data');//This is for the comments
        const graphData = firebase.database().ref('liveusage');
        dataRef.on('value', (snapshot) => {
            let AllTheData = snapshot.val();
            let newState = [];
            
            for (let item in AllTheData) {
                newState.push({
                    id: item,
                    consumption: AllTheData[item].consumption,
                    estimatedConsumption: AllTheData[item].estimatedConsumption
                });
            }
            this.setState({
                home_data: newState
            })
        });
        
        graphData.on('value',(snapshot) => {
            let AllGraphData = snapshot.val();
            let newGraphState = [];
            
            for (let item in AllGraphData){
                newGraphState.push({
                    id:item,
                    name:AllGraphData[item].name,
                    point:AllGraphData[item].point
                });
            }
            this.setState({
                liveusage_state: newGraphState
            })
        });
    }
    
    render() {
        return (
            <Container className="dashboard">
                <Row>
                    <Col md={12}>
                        <h3 className="page-title">Home</h3>
                    </Col>
                </Row>
                <Row>
                    <LiveUsage graphData = {this.state.liveusage_state}/>
                </Row>
                <Row>
                    <PowerConsumption Data={this.state.home_data}/>
                    <Cost Data={this.state.home_dashboard_data}/>
                    <SolarEnergy Data={this.state.home_dashboard_data}/>
                    <Efficiency Data={this.state.home_dashboard_data}/>
                </Row>
                <Row>
                    <ChangeInCost Data={this.state.home_dashboard_data}/>
                    <EnergyIntensity Data={this.state.home_dashboard_data}/>
                    <ActiveMachines Data={this.state.home_dashboard_data}/>
                </Row>
            </Container>
        )
    }
}

export default HomeDashboard
