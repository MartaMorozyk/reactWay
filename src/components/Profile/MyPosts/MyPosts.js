import React from 'react'
import cl from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let massageElements = props.posts
        .map(m => <Post key={m.id} message={m.message} count={m.likesCount}/>);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return <div className={cl.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={cl.posts}>
            {massageElements}
        </div>
    </div>
}

export default MyPosts;