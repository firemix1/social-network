import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} dialogName={d.name}/>)
    let messageElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)

    let sendMessage = () => props.sendMessage()
    let onMessageChange = (e) => {
        let text = e.target.value
        props.onMessageChange(text)
    }

    return (
        <div className={styles.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div>
                <div>
                    {messageElements}
                </div>
                <div>
                    <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText}
                              placeholder="Type message"/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs