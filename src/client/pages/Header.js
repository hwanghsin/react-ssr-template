import React from 'react';
import { NavWrap } from '../components/hoc';

const Header = NavWrap(props => {
    const { navigation, user, toggleSideMenu, toggleHeaderSetting, logout } = props;
    return (
        <nav className='d-flex pl-3 bg-dark header'>
            <button type='button' className='btn btn-secondary bg-dark toggle-btn' onClick={() => toggleSideMenu()}>
                <i className="fas fa-bars"></i>
            </button>
            <div className='position-relatice config'>
                <div className='d-flex mx-3 setting pointer' onClick={() => toggleHeaderSetting()}>
                    <span>{`歡迎 ${user.myInfo ? user.myInfo.displayName : ''}`}</span>
                    <i className={navigation.isCollapse ? 'fas fa-sort-up' : `fas fa-sort-down`}></i>
                </div>
                <ul className={`position-absolute bg-dark m-0 px-3 ext-area${navigation.isCollapse ? ' show' : ''}`}>
                    <li className='d-flex pointer' onClick={() => logout()}>
                        <i className='fas fa-sign-out-alt'></i>
                        <span className='ml-2'>登出</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
})

export default Header;