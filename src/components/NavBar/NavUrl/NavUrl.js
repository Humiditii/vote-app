import React from 'react';

const navurl = props => {
    return (
        <li><a href={props.link}>{props.navname}</a></li>
    );
}

export default navurl