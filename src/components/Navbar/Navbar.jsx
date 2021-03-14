import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <div className={styles.nav}>
        <div className={styles.refs}>
            <div>
                <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/users" activeClassName={styles.active}>Users</NavLink>
            </div>
        </div>
    </div>
}
export default Navbar;