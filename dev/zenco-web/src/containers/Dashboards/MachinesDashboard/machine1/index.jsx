import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import LiveStatusText from './components/LiveStatusText';
import UsageStatusText from './components/UsageStatusText'
import MachineConsumption from './components/MachineConsumption'


class Machine1 extends React.Component {
    state = {
        machine_1_live: [{
            device_active: 3,
            avg_consumption: 1,
            avg_runtime: 2
        }],
        machine_1_usage: [{
            times_on: 48,
            total_usage: 10.5,
            total_cost: 10000
        }],
        machine_1_graph: [{
            dataYearly: [
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
            ],
            dataMonthly: [
                {name: '01.02', uv: 3784},
                {name: '02.02', uv: 3864},
                {name: '03.02', uv: 3976},
                {name: '04.02', uv: 4283},
                {name: '05.02', uv: 4100},
                {name: '06.02', uv: 4152},
                {name: '07.02', uv: 4136},
                {name: '08.02', uv: 4052},
                {name: '09.02', uv: 4119},
                {name: '10.02', uv: 4213},
                {name: '11.02', uv: 4156},
                {name: '12.02', uv: 3975},
                {name: '13.02', uv: 3948},
                {name: '14.02', uv: 3784},
                {name: '15.02', uv: 4123},
                {name: '16.02', uv: 4278},
                {name: '17.02', uv: 4512},
                {name: '18.02', uv: 4631},
                {name: '19.02', uv: 4489},
                {name: '20.02', uv: 4231},
                {name: '21.02', uv: 4156},
                {name: '22.02', uv: 4327},
                {name: '23.02', uv: 4178},
                {name: '24.02', uv: 3798},
                {name: '25.02', uv: 4461},
                {name: '26.02', uv: 4231},
                {name: '27.02', uv: 4163},
                {name: '28.02', uv: 4256},
            ]
        }]
        
    };
    
    render() {
        return (
            <Container className="dashboard">
                <Row>
                    <Col md={12}>
                        <h3 className="page-title">Machine 1 Usage</h3>
                    </Col>
                </Row>
                <Row>
                    <LiveStatusText Data={this.state.machine_1_live}/>
                    <UsageStatusText Data={this.state.machine_1_usage}/>
                </Row>
                <Row>
                    <MachineConsumption Data={this.state.machine_1_graph}/>
                </Row>
            </Container>
        )
    }
}

export default translate('common')(Machine1);

