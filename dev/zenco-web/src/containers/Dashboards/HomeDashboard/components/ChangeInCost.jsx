import React, {PureComponent} from 'react';
import {BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid} from 'recharts';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const dataYearly = [
    {name: 'February', uv: 2000},
    {name: 'March', uv: 3200},
];

const dataMontly = [
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

const ChangeInCost = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <Datalist {...mappedData}/>)}
        </React.Fragment>
    )
};


class Datalist extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
    };
    
    constructor() {
        super();
        this.state = {
            yearly: true,
        };
    }
    
    handleChange = () => {
        this.setState({yearly: !this.state.yearly});
    };
    tickFormer = (tick) => {
        return `${tick / 1000}kW`;
    };
    
    render() {
        const {t} = this.props;
        
        return (
            <Panel
                xl={4}
                lg={7}
                md={12}
                title={"Change In Cost"}
            >
                <div className="dashboard__weight-stats">
                    <div className="dashboard__weight-stat">
                        <p className="dashboard__weight-stat-title">Increase In Energy</p>
                        <p className="dashboard__weight-stat-value dashboard__weight-stat-value--control">+{this.props.changeInCost_Percentage}%</p>
                    </div>
                    <div className="dashboard__weight-stat">
                        <p className="dashboard__weight-stat-title">Increase In Cost</p>
                        <p className="dashboard__weight-stat-value dashboard__weight-stat-value--total">+{this.props.changeInCost_Money}₹</p>
                    </div>
                </div>
                <ResponsiveContainer height={260}>
                    {this.state.yearly ?
                        <BarChart data={dataYearly} margin={{top: 20, left: -15}}>
                            <XAxis dataKey="name" tickLine={false}/>
                            <YAxis tickLine={false} tickFormatter={this.tickFormer}/>
                            <Tooltip/>
                            <CartesianGrid vertical={false}/>
                            <Bar dataKey="uv" name="Energy" fill="#70BBFD" barSize={70}/>
                        </BarChart>
                        :
                        <BarChart data={dataMontly} margin={{top: 20, left: -15}}>
                            <XAxis dataKey="name" tickLine={false}/>
                            <YAxis tickLine={false} tickFormatter={this.tickFormer}/>
                            <Tooltip/>
                            <CartesianGrid vertical={false}/>
                            <Bar dataKey="uv" name="Sales" fill="#4ce1b6" barSize={4}/>
                        </BarChart>
                    }
                
                </ResponsiveContainer>
            
            </Panel>
        );
    }
}

export default translate('common')(ChangeInCost);
