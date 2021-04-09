import React from 'react';
import Modal from '../Modal';

const VocabWordInput = ({ user, vocab, createVocab, changeVocabWord, changeVocabDesc, toggleShowModal }) => {
    const turnModalOn = () => toggleShowModal(true);
    const changeWord = e => changeVocabWord(e.target.value);
    const changeDesc = e => changeVocabDesc(e.target.value);
    const modalProps = {
        isOn: vocab.isModalOn,
        title: '新增單字',
        toggleModal: () => toggleShowModal(false), 
        submit:  () => {
            if (!(vocab.form.word) || !(vocab.form.desc)) return;
            createVocab({
                ...vocab.form,
                updatedBy: user.myInfo.displayName,
                category: vocab.category
            });
            toggleShowModal(false);
        }
    }
    return (
        <React.Fragment>
        <form className='form-group px-3 mx-2'>
            <button type='button' className='btn btn-success' onClick={turnModalOn}>新增單字</button>
        </form>
        <Modal {...modalProps}>
            <form>
                <input type='text' placeholder='輸入單字名稱' className='form-control mb-3' value={vocab.form.word} onChange={changeWord} />
                <textarea className='form-control' placeholder='單字註解' defaultValue={vocab.form.desc} onChange={changeDesc}></textarea>
            </form>
        </Modal>
        </React.Fragment>
    )
}

export default VocabWordInput;