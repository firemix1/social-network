import React from "react";
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let dialogsPage = props.store.getState().dialogsPage

    let sendMessage = () => props.store.dispatch(sendMessageActionCreator())
    let onMessageChange = (text) => { props.store.dispatch(onMessageChangeActionCreator(text))
    }

    return (
        <div>
            <Dialogs dialogsPage={dialogsPage} sendMessage={sendMessage} onMessageChange={onMessageChange}/>
        </div>
    )
}
export default DialogsContainer