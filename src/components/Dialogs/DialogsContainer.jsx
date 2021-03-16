import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps =(state) => {
    return { dialogsPage: state.dialogsPage }
}

let mapDispatchToProps =(dispatch) => {
    return {
        sendMessage: () => dispatch(sendMessageActionCreator()),
        onMessageChange: (text) => { dispatch(onMessageChangeActionCreator(text)) }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer