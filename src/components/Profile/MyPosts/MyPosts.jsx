import Post from "./Post/Post";
import styles from "./MyPost.module.css"
import React from "react";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.onPostChange(text)
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