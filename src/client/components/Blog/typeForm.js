import React from 'react';

const TypeForm = ({ user, blog, changeTypeName, createType }) => (
  <section className='form-group px-2'>
    <label htmlFor='type'>部落格類別:</label>
    <div className='input-group'>
      <input
        type='text'
        className='form-control'
        id='type'
        placeholder='請輸入類別，點選右側按鈕新增'
        value={blog.typeForm.name}
        onChange={(e) => changeTypeName(e.target.value)}
      />
      <div className='input-group-append' onClick={() => createType({ name: blog.typeForm.name, updatedBy: user.myInfo.displayName, category: 'BLOG' })}>
        <span className='input-group-text pointer'>新增</span>
      </div>
    </div>
  </section>
)

export default TypeForm;