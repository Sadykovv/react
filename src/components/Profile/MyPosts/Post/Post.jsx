import profilecss from './Post.module.css'

const Post = (props) => {


    return <div>
                <div className={profilecss.item}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' />
                    {props.message}
                    <div>
                      likes:
                    {props.likes}
                    </div>
                </div>
            </div>
}

export default Post;