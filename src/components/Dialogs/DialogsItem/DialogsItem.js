import React from 'react';
import cl from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {

    let path = '/dialogs/' + props.id;
    return (
        <div className={cl.dialog + ' ' + cl.active}>
            <NavLink to={path} activeClassName={cl.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogsItem;