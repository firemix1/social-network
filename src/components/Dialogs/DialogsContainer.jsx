import React from "react";
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                let dialogsPage = state.dialogsPage

                let sendMessage = () => store.dispatch(sendMessageActionCreator())
                let onMessageChange = (text) => {
                    store.dispatch(onMessageChangeActionCreator(text))
                }
                return (
                    <div>
                        <Dialogs dialogsPage={dialogsPage} sendMessage={sendMessage} onMessageChange={onMessageChange}/>
                    </div>
                )
            }
            }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer