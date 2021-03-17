import React from 'react'
import styles from "./Users.module.css"
import userPhoto from "../../images/empty-user-photo.jpg"
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
                <span className={styles.pages}>
                    {pages.map(p => {
                        return <span className={props.currentPage === p && styles.selected} onClick={() => {
                            props.selectedPage(p)
                        }}> {p} </span>
                    })}
                </span>
            {props.users.map(u => <div key={u.id}>
                    <span className={styles.photoUser}>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small
                                : userPhoto}/>
                        </NavLink>
                    </span>
                    <span>{u.name}</span>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>

                </div>
            )}
        </div>
    )
}


export default Users