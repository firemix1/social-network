import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Form} from "react-final-form";
import {NewMessageWithValidate} from "../Common/FormsControl/FormsControl";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} dialogName={d.name} key={d.id}/>)
    let messageElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message} key={m.id}/>)

    const onSubmit = text => {
        props.sendMessage(text.message)
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
                    <NewMessageForm onSubmit={onSubmit}/>
                </div>

            </div>
        </div>
    )
}
const NewMessageForm = (props) => (
    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <NewMessageWithValidate />
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        )}
    />
)

export default Dialogs