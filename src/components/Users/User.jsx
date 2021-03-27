import React from 'react'
import styles from "./Users.module.css"
import userPhoto from "../../images/emptyPhotoUser.png"
import {NavLink} from "react-router-dom";
import btnStyle from "../Common/modulesCSS/button.module.css";

let User = (props) => {
    return (
        <div>
            {props.users.map(u =>
                <div key={u.id} className={styles.user}>
                    <span className={styles.photoUser}>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={"small"}/>
                        </NavLink>
                    </span>
                    <div className={styles.info}>
                        <span className={styles.name}>{u.name}</span>
                        {(props.authorizedId !== u.id) && <div className={styles.button}>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProcessing(true, u.id)
                                    props.unfollowUser(u.id)
                                }} className={btnStyle.button}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProcessing(true, u.id)
                                    props.followUser(u.id)
                                }} className={btnStyle.button}>Follow</button>}
                        </div>}
                    </div>

                </div>
            )}
        </div>
    )
}

export default User