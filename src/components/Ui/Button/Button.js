import React from 'react';
import Aux from '../../../hoc/Auxillary';

const button = props => {
    const btnStyles = ['waves-effect waves btn-large ', 'material-icons left']
    const btnColour = props.btncolour;
    btnStyles[0] = btnStyles[0] + btnColour;
    return (
        <Aux>
            <a href={props.whereto} className={btnStyles[0]}>
            <i className={btnStyles[1]}>{props.iconname}</i>{props.btnname}</a>
        </Aux>
    );
}

export default button;