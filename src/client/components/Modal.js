import React from 'react';

const Modal = ({ isOn, isDelete, title, children, toggleModal, submit }) => {
  return (
    <div className={`modal fade${isOn ? ' show' : ''}`} style={{display: isOn ? 'block' : 'none', backgroundColor:'rgba(0, 0, 0, 0.3)'}}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{title}</h5>
            <button type='button' className='close' onClick={() => toggleModal()}>
              <span>&times;</span>
            </button>
          </div>
          <div className='modal-body'>{children}</div>
          <div className='modal-footer'>
            <button type='button' className={`btn btn-${isDelete ? 'danger' : 'primary'}`} onClick={() => submit()}>{isDelete ? '刪除' : '送出'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;