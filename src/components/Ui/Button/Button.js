import React from 'react';
import Aux from '../../../hoc/Auxillary';

const button = props => {
    const btnStyles = ['btn waves-effect waves btn-medium  ', 'material-icons left']
    const btnColour = props.btncolour;
    btnStyles[0] = btnStyles[0] + btnColour;
    return (
        <Aux>
            {/* <a  type={props.action} href={props.whereto} className={btnStyles[0]}>
            <i className={btnStyles[1]}>{props.iconname}</i>{props.btnname}</a> */}
            <button type={props.action} className={btnStyles[0]}>

            <i className={btnStyles[1]}>{props.iconname}</i>{props.btnname}
            </button>
        </Aux>
    );
}

export default button;