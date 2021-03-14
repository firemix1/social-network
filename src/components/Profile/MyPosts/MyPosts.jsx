import Post from "./Post/Post";
import styles from "./MyPost.module.css"
import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(onPostChangeActionCreator(text))
    }

    return (
        <div className={styles.items}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}
                          placeholder="What's new?"/>
                <div>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}
export default MyPosts