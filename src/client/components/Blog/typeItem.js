import React from 'react';

const BlogTypeItem = ({ name, deleteType }) => (
    <h3 className='m-2 d-inline-block' onClick={() => deleteType()}>
        <span className='badge badge-secondary position-relative'>
            <i className='fas fa-times fa-lg position-absolute pointer category-icon-delete'></i>
            {name}
        </span>
    </h3>
);

export default BlogTypeItem;