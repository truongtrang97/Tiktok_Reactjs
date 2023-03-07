import classNames from 'classnames/bind';
import styles from './LogIn.module.scss';
const cx = classNames.bind(styles);
function LogIn() {
    return (
        <div className={cx('modal')}>
            <div className={cx('modal-content')}>
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" />
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
