import React from 'react';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const NetUsage = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <NetUsageList {...mappedData}/>)}
        </React.Fragment>
    )
};

const NetUsageList = (props) => (
    <Panel md={12} lg={7} xl={4} sm={12} xs={12} title={"Net Usage"}>
        <div className="dashboard__sales-report">
            <div className="progress-wrap progress-wrap--big" style={{margin: "2rem"}}>
                <p className="dashboard__sales-report-title text-center ">Today</p>
                <p className="dashboard__booking-reservations-number text-center ">{props.net_usage}₹</p>
                <p className="dashboard__sales-report-plan text-center  text-justify" id={"line-spacing"}>Spent on
                    energy imported from the grid <br/> minus the earnings from the solar(Approximately)</p>
            </div>
        </div>
    </Panel>
);

NetUsage.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(NetUsage);
