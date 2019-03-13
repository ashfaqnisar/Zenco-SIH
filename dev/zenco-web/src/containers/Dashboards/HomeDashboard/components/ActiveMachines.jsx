import React from 'react';
import {Progress} from 'reactstrap';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';
import {Link} from "react-router-dom";
import Modal from '../../../../shared/components/Modal';

const ActiveMachines = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <Datalist {...mappedData}/>)}
        </React.Fragment>
    )
};

function OpenTheDangerModal(consumption) {
    if (consumption > 10) {
        return (
            <React.Fragment>
                <Modal
                    color="danger"
                    title="Stop!"
                    colored
                    toggle={true}
                    message="The voltage of the machine 1 is very much high please check this machine."
                />
            </React.Fragment>
        
        )
    }
};


const Datalist = (props) => (
    <Panel xs={12} md={12} lg={12} xl={4} title={"Active Machines"}
           subhead="The load of the machines in the real-time.">
        <div className="progress-wrap progress-wrap--small">
            <div className={"progress-wrap progress-wrap--small progress-wrap--red progress-wrap--label-top"}>
                <p>{'Machine 1'}</p>
                <Progress className={"progress-red"} animated value={100}>
                    <p className="progress__label goals red">+{OpenTheDangerModal(props.machine_1)}20kW</p>
                </Progress>
            </div>
        </div>
        <div className="progress-wrap progress-wrap--small">
            <div className={"progress-wrap progress-wrap--small progress-wrap--green progress-wrap--label-top"}>
                <p>{'Machine 2'}</p>
                <Progress animated value={98}>
                    <p className="progress__label goals">{props.machine_2}</p>
                </Progress>
            </div>
        </div>
        <div className="progress-wrap progress-wrap--small">
            <div className={"progress-wrap progress-wrap--small progress-wrap--green progress-wrap--label-top"}>
                <p>{'Machine 3'}</p>
                <Progress animated value={96}>
                    <p className="progress__label goals">{props.machine_3} kW</p>
                </Progress>
            </div>
        </div>
        <div className="progress-wrap progress-wrap--small">
            <div className={"progress-wrap progress-wrap--small progress-wrap--green progress-wrap--label-top"}>
                <p>{'Machine 4'}</p>
                <Progress animated value={88}>
                    <p className="progress__label goals">{props.machine_4} kW</p>
                </Progress>
            </div>
        </div>
        <div className="progress-wrap progress-wrap--small">
            <div className={"progress-wrap progress-wrap--small progress-wrap--green progress-wrap--label-top"}>
                <p>{'Machine 5'}</p>
                <Progress animated value={90}>
                    <p className="progress__label goals">{props.machine_5} kW</p>
                </Progress>
            </div>
        </div>
        <div className="progress-wrap progress-wrap--small">
            <div className={"progress-wrap progress-wrap--small progress-wrap--green progress-wrap--label-top"}>
                <p>{'Machine 6'}</p>
                <Progress animated value={91}><p className="progress__label goals">{props.machine_6} kW</p></Progress>
            </div>
        </div>
        <p>{'*Top three machines, make up 90% of the usage.'}</p>
        <Link to={"./machines/1"}>
            <p className={"color-blue pd-top-10"}>See All</p>
        </Link>
    
    </Panel>
);

ActiveMachines.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(ActiveMachines);
