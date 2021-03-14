import styles from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, addSymbol} from "../../redux/store";

const Profile = (props) => {
    return (
        <div className={styles.main}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
                     />
        </div>
    )
}

export default Profile