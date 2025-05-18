import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://wallpapers.com/images/hd/seychelles-beach-3600-x-1479-wallpaper-oxury1awhz1l00bx.jpg" alt="" />
            </div>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=f9bb733fb8873fec7e64f98b67263e034b28bd54-5253517-images-thumbs&n=13" alt="" />
                description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;