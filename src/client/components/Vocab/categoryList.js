import React from 'react';
import Modal from '../Modal';

const CategoryList = ({ types, vocab, user, createType, selectParentCategory, changeCategoryName, toggleShowModal }) => {
    const modalProps = {
        isOn: vocab.isModalOn,
        title: '新增單字分類',
        toggleModal: () => toggleShowModal(false), 
        submit:  () => {
            const vocabCategory = {
                name: vocab.categoryName, 
                updatedBy: user.myInfo.displayName, 
                category: 'VOCAB', 
                parent: vocab.category ? vocab.category.fullKeyRoute : null
            }
            createType(vocabCategory);
            toggleShowModal(false);
        }
    }
    return (
        <React.Fragment>
        <section>
            <div className='d-flex row mx-0 mb-3 p-0'>
                {vocab.category ? <i className='fas fa-chevron-left mr-3 pt-1 pointer back-btn d-flex' onClick={() => {
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
                <h5 className='vocab-title d-flex m-0'>{vocab.category ? vocab.category.name : '單字庫分類列表'}</h5>
                <i className='fas fa-plus mr-3 pt-1 pointer add-btn d-flex' onClick={() => toggleShowModal(true)}></i>
            </div>
            <ul className='list-group'>
                {vocab.childList.length > 0 ? vocab.childList.map(child => {
                    const offspring = types && Object.values(types).filter(t => t.fullKeyRoute && t.fullKeyRoute.substr(0, t.fullKeyRoute.length - child.fullKeyRoute.length - 1) === child.fullKeyRoute);
                    return (
                        <li key={child.name} className='list-group-item d-flex justify-content-between align-items-center pointer' 
                            onClick={() => selectParentCategory(child, offspring)}>
                            {child ? child.name : ''}
                            <span className='badge badge-primary badge-pill'>
                                {offspring && offspring.length > 0 ? offspring.length : ''}
                            </span>
                        </li>
                    )
                }) : <span>未設定單字分類</span>}
            </ul>
        </section>
        <Modal {...modalProps}>
            <form>
                <input type='text' placeholder='輸入名稱' className='form-control' onChange={e => changeCategoryName(e.target.value)} />
            </form>
        </Modal>
        </React.Fragment>
    )
}

export default CategoryList;