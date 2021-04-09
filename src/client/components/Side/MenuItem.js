import React from 'react';

const MenuItem = ({ isShrink, side, replace }) => {
    return (
        <li className='px-3 d-flex pointer menu-item' onClick={() => replace(side.path)} title={side.name}>
            <i className={`fas ${side.icon || 'fa-question-circle'}`}></i>
            {isShrink || <span className='ml-2'>{side.name}</span>}
        </li>
    )
}

export default MenuItem;