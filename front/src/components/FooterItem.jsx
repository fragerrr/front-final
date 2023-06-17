import React from 'react';

const FooterItem = (props) => {
    return (
        <li><a href={props.link}>{props.text}</a></li>
    );
};

export default FooterItem;