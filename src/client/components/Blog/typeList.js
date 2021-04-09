import React from 'react';
import BlogTypeItem from './typeItem';
import Modal from '../Modal';

const TypeList = ({ types, vocab, deleteType, toggleShowModal }) => (
  <section className='type-list mb-5'>
    {Object.keys(types || {}).map((key) => {
      if (types[key].category && types[key].category !== 'BLOG') return;
      const modalProps = {
        isOn: vocab.isModalOn,
        isDelete: true,
        title: '刪除類別',
        toggleModal: () => toggleShowModal(false), 
        submit:  () => {
          deleteType(key)
          toggleShowModal(false);
        }
      }
      return (
        <React.Fragment>
        <BlogTypeItem
          key={key}
          name={types[key].name}
          deleteType={() => toggleShowModal(true)}
        />
        <Modal {...modalProps}>
          <form><label>{`確定要刪除 ${types[key].name}？`}</label></form>
        </Modal>
        </React.Fragment>
      );
    })}
  </section>
)

export default TypeList;