import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://i.pinimg.com/736x/73/fc/ab/73fcab18ddaad7182970fd75d01fc7a9.jpg" alt="" />
        {props.message}
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
}

export default Post;