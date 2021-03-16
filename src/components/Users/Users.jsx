import React from 'react'
import styles from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../images/empty-user-photo.jpg"

class Users extends React.Component {
    constructor() {
        super();
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return (
            <div>
                {this.props.users.map(u => <div key={u.id}>
                    <span className={styles.photoUser}>
                        <img src={u.photos.small != null ? u.photos.small
                            : userPhoto} width="100" height="100"/>
                    </span>
                        <span>{u.name}</span>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>

                    </div>
                )}
            </div>
        )
    }
}

export default Users