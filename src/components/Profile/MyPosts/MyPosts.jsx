import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea name="" id=""></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message={"Hi, how are you?"} likeCount={15}/>
                <Post message={"It's my first post"} likeCount={20}/>
                <Post message={"Hello, where you from?"} likeCount={0}/>
                <Post message={"I am from Russia!"} likeCount={7}/>
            </div>
        </div>
    );
}

export default MyPosts;