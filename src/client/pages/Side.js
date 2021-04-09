import React from 'react';
// Components 
import { NavWrap } from '../components/hoc';
import MenuItem from '../components/Side/MenuItem';

const Side = NavWrap(props => {
    const { navigation, history } = props;
    return (
        <aside className={`position-relative bg-dark side-menu${navigation.isShrink ? ' shrink' : ''}`}>
            <section className='position-absolute d-flex top'>
                {navigation.isShrink ? <img alt='logo' src='/images/favicon.ico' /> : <span className='side-logo'>HWANG</span>}
            </section>
            <section className='position-absolute menu-list'>
                <ul className='pt-3 px-0 d-flex'>
                    {navigation.sides.map(side => <MenuItem key={side.path} isShrink={navigation.isShrink} side={side} {...history} />)}
                </ul>
            </section>
        </aside>
    )
})

export default Side;