import React, { useState } from 'react';
import { AuthWrap } from '../components/hoc';
import BlogTypeForm from '../components/Blog/typeForm';
import BlogTypeList from '../components/Blog/typeList';
import CategoryList from '../components/Vocab/categoryList';
// Actions
import { fetchTypes } from '../../redux/type/actions';

const Setting = AuthWrap(props => {
  const [active, setActive] = useState('blog');
  return (
    <div className='position-relative main-content'>
      <div className='p-5'>
        <div className='row'>
          <div className='col-9'>
            <div className='tab-content' id='v-pills-tabContent'>
              <div className={`tab-pane fade${active === 'blog' ? ' show active' : ''}`} id='blog-type' role='tabpanel' aria-labelledby='blog-type-tab'>
                <BlogTypeForm {...props} />
                <BlogTypeList {...props} />
              </div>
              <div className={`tab-pane fade${active === 'vocab' ? ' show active' : ''}`} id='vocab-type' role='tabpanel' aria-labelledby='vocab-type-tab'>
                <CategoryList {...props} />
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='nav flex-column nav-pills' id='v-pills-tab' role='tablist' aria-orientation='vertical'>
              <a onClick={() => setActive('blog')} className={`nav-link${active === 'blog' ? ' active bg-dark' : ''}`} id='blog-type-tab' data-toggle='pill' href='#blog-type' role='tab' aria-controls='blog-type' aria-selected='true'>部落格</a>
              <a onClick={() => setActive('vocab')} className={`nav-link${active === 'vocab' ? ' active bg-dark' : ''}`} id='vocab-type-tab' data-toggle='pill' href='#vocab-type' role='tab' aria-controls='vocab-type' aria-selected='false'>單字庫</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const loadData = store => store.dispatch(fetchTypes());

export default {
  loadData,
  component: Setting
};
