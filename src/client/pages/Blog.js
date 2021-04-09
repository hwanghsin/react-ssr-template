import React from 'react';
import { AuthWrap } from '../components/hoc';

const Blog = AuthWrap(props => {
  return (
    <div className='position-relative main-content'>
      <section className='px-3 pt-4 blog-form'>
        <form onSubmit={e => {
            e.preventDefault();
        }}>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor='title'>主題</label>
              <input type='text' className='form-control' id='title' />
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='blog-type'>類別</label>
              <select className='form-control' id='blog-type'>
                <option>-- 請選擇類別 --</option>
              </select>
            </div>
          </div>
          <div className='form-row pl-1'>
            <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='privacy' id='public' value='0' />
                <label className='form-check-label' htmlFor='public'>公開</label>
            </div>
            <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='privacy' id='private' value='1' />
                <label className='form-check-label' htmlFor='private'>不公開</label>
            </div>
          </div>
          <p>React Quill 目前不支援SSR，因為套件依賴DOM。</p>
          <button type='submit' className='btn btn-info'>送出</button>
        </form>
      </section>
      <aside className='position-absolute pt-4 custom-side-list'>List</aside>
    </div>
  );
});

export default {
  component: Blog,
};
