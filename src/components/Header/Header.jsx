import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
import btnStyle from "../Common/modulesCSS/button.module.css";

const Header = (props) => {
    return <div className={styles.header}>
        <img src="https://webstockreview.net/images/blood-streak-png-9.png" alt="header img"/>
        <div className={styles.LoginBar}>
            {props.auth.isAuth
                ? <div className={styles.logout}><NavLink to={"/profile"}> {props.auth.login}
                </NavLink> <br/>
                    <button onClick={props.logout} className={btnStyle.buttonLogin}>Logout</button>
                </div>
                : <div className={styles.login}><NavLink to={"/login"}>Login</NavLink></div>}
        </div>
    </div>
}
export default Header