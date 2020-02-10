import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Massages/Massages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} key = {d.id} id={d.id}/>);

    let textElements = state.messages.map(m => <Message text={m.text} key={m.id}/>);

    let addMessage = () => {
        props.addMessageActionCreator();
    }

    let onMessageChange = (event) => {
        let newMessage = event.target.value;
        props.updateNewMessageTextActionCreator(newMessage);
    }

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                <div>{textElements}</div>
                <div>
                    <textarea placeholder={'Enter your message..'}
                              onChange={onMessageChange} value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>);
}

export default Dialogs;