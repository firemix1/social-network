import React from 'react'
import styles from "./Users.module.css"
import userPhoto from "../../images/empty-user-photo.jpg"
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProcessing(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id,
                                    {
                                        withCredentials: true,
                                        headers: {"API-KEY": "208782fa-c6ee-42a9-bc64-c308bbcc13cb"}
                                    })
                                    .then(response => {
                                        if(response.data.resultCode === 0)
                                            props.unfollow(u.id)
                                        props.toggleFollowingProcessing(false, u.id)
                                        }
                                    )
                            }} >Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProcessing(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id, {},
                                    {
                                        withCredentials: true,
                                        headers: {"API-KEY": "208782fa-c6ee-42a9-bc64-c308bbcc13cb"}
                                    })
                                    .then(response => {
                                        if(response.data.resultCode === 0)
                                            props.follow(u.id)
                                        props.toggleFollowingProcessing(false, u.id)
                                        }
                                    )
                            }} >Follow</button>}
                    </div>

                </div>
            )}
        </div>
    )
}


export default Users