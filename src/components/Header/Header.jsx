import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header =(props) => {
    return <div className={styles.header}>
        <img src="https://webstockreview.net/images/blood-streak-png-9.png" alt="header img"/>
        <div className={styles.LoginBar}>
            {props.auth.isAuth
                ? <div>{props.auth.login} <br/> <button onClick={props.logout}>Logout</button> </div>
                : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </div>
}
export default Header