import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://wallpapers.com/images/hd/seychelles-beach-3600-x-1479-wallpaper-oxury1awhz1l00bx.jpg" alt="" />
            </div>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=f9bb733fb8873fec7e64f98b67263e034b28bd54-5253517-images-thumbs&n=13" alt="" />
                description
            </div>
            <div>
                My post
                <div>
                    New Post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>Post 1</div>
                    <div className={classes.item}>Post 2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;