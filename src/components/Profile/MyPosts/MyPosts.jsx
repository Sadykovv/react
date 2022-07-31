import mypostscss from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} likes={post.likes} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostTextActionCreator(text);

    }

    return <div>
        <h3> My posts </h3>
        <div className={mypostscss.content}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>add</button>
            </div>
            <div className={mypostscss.posts}>
                {postElements}
            </div>
        </div>

    </div>
}

export default MyPosts;