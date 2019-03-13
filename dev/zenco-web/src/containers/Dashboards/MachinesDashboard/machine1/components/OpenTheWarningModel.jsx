import React from "react";
import Modal from '../../../../shared/components/Modal';

const OpenTheWarningModel = () => {
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