import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text) => {
                    store.dispatch(onPostChangeActionCreator(text))
                }
                return (
                    <div>
                        <MyPosts posts={state.profilePage.posts} addPost={addPost}
                                 onPostChange={onPostChange} newPostText={state.profilePage.newPostText}/>
                    </div>
                )
            }
            }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer