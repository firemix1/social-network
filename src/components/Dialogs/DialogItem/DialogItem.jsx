import styles from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return(
        <div>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={styles.active}>{props.dialogName}</NavLink>
        </div>
    )
}
export default DialogItem