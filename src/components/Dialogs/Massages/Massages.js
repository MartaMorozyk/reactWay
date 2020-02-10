import React from 'react';
import cl from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return (
        <div className={cl.message}>{props.text}</div>
    );
}

export default Message;