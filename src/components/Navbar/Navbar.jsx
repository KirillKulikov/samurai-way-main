import classes from './Navbar.module.css';

console.log(classes)

// const classes = {
//     'nav': '.Navbar_nav__Q+Udo',
//     'item': 'Navbar_item__ZfdZD',
//     'active': '',
// }

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <a href="#s">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="#s">Message</a>
            </div>
            <div className={classes.item}>
                <a href="#s">News</a>
            </div>
            <div className={classes.item}>
                <a href="#s">Music</a>
            </div>
            <div className={classes.item}>
                <a href="#s">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;