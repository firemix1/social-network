import styles from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";

const Profile = (props) => {
    return (
        <div className={styles.main}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         setStatusMe={props.setStatusMe}
                         getStatus={props.getStatus}
                         owner={props.owner}
                         updatePhoto={props.updatePhoto}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile