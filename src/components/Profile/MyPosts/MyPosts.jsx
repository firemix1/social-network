import Post from "./Post/Post";
import styles from "./MyPost.module.css"
import React from "react";
import {Form} from "react-final-form";
import {MyPostWithValidate} from "../../Common/FormsControl/FormsControl";
import btnStyle from "../../Common/modulesCSS/button.module.css";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id}/>)

    const onSubmit = text => {
        props.addPost(text.post)
    }

    return (
        <div className={styles.items}>
            <h3>My posts</h3>
            <div>
                <NewPostForm onSubmit={onSubmit}/>
            </div>
            {postElements}
        </div>
    )
}
const NewPostForm = (props) => (
    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <MyPostWithValidate />
                </div>
                <div>
                    <button type="submit" className={btnStyle.button} >Post</button>
                </div>
            </form>
        )}
    />
)

export default MyPosts