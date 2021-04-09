import React from 'react';
import { AuthWrap } from '../components/hoc';
import VocabWordInput from '../components/Vocab/wordInput';
import VocabCardItem from '../components/Vocab/cardItem';
// Actions
import { fetchTypes } from '../../redux/type/actions';
import { fetchVocabs } from '../../redux/vocab/actions';

const Vocab = AuthWrap(props => {
  const { types, vocab, selectParentCategory, toggleShowModal } = props;
  return (
    <div className='position-relative main-content'>
      <div className='vocab-area px-3 pt-4'>
        <VocabWordInput {...props} />
        {(vocab.category || vocab.childList.length > 0) ? <div className='vocab-list-area mx-2'>
          {vocab.vocabList.map((item, index) => {
            return <VocabCardItem key={index} word={item.word} desc={item.desc} clickEvent={() => toggleShowModal(true)} />
          })}
        </div> : <div className='d-flex align-items-center jutify-content-center mx-2'>{vocab.isReady ? '尚未新增單字分類' : '載入中...'}</div>}
      </div>
      <aside className='position-absolute pt-4 custom-side-list'>
        <div className='d-flex header'>
          {vocab.category ? <i className='fas fa-chevron-left pl-1 mr-3 pt-1 pointer back-btn d-flex' onClick={() => {
            const parent = vocab.category && vocab.category.parent;
            const childList = parent && types ? [] : Object.values(types).filter(t => t.category === 'VOCAB' && t.fullKeyRoute && t.fullKeyRoute.indexOf('.') === -1);
            if (parent) {
                Object.values(types).forEach(type => {
                    if (parent && type.category === 'VOCAB' && type.parent === parent) {
                        childList.push(type);
                    }
                });
            }
            selectParentCategory(parent ? parent : null, childList);
          }}></i> : <div className='back-btn d-flex'></div>}
          <h6 className='vocab-title d-flex m-0'>{vocab.category ? vocab.category.name : '單字庫分類列表'}</h6>
          <i className='add-btn'></i>
        </div>
        <ul className='p-0'>
          {vocab.childList.length > 0 ? vocab.childList.map(child => {
            const offspring = types && Object.values(types).filter(t => t.fullKeyRoute && t.fullKeyRoute.substr(0, t.fullKeyRoute.length - child.fullKeyRoute.length - 1) === child.fullKeyRoute);
            return (
                <li key={child.name} className='px-3 py-2 pointer' 
                    onClick={() => selectParentCategory(child, offspring)}>
                    {child ? child.name : ''}
                </li>
            )
          }) : <li className='px-3 py-2'>未設定單字分類</li>}
        </ul>
      </aside>
    </div>
  );
});

const loadData = (store) => {
  return Promise.all([
    store.dispatch(fetchTypes()),
    store.dispatch(fetchVocabs())
  ]);
};

export default {
  loadData,
  component: Vocab
};