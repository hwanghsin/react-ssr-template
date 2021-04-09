import React from 'react';
import { LoginWrap } from '../components/hoc';

const Login = LoginWrap(props => {
    const { authentication, errors, changeUsername, changePassword, login } = props;
    return (
        <div>
        <div id='login-container'>
            <h3>帳號登入</h3><hr/>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <form onSubmit={async event => {
                            event.preventDefault();
                            login({ username: authentication.form.username, password: authentication.form.password });
                        }}>
                        <div className='input-group mb-3'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text' id='email-label'>
                                    <i className='fas fa-user-circle'></i>
                                </span>
                            </div>
                            <input type='email' className='form-control' placeholder='帳號' 
                                value={authentication.form.username} required={true}
                                onChange={event => changeUsername(event.target.value)} />
                        </div>
                        <div className='input-group mb-3'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text' id='password-label'>
                                    <i className='fas fa-key'></i>
                                </span>
                            </div>
                            <input type='password' className='form-control' placeholder='密碼' 
                                value={authentication.form.password} required={true}
                                onChange={event => changePassword(event.target.value)}/>
                        </div>
                        <div className='text-center'>
                            <button type='submit' className='btn btn-customized' 
                                disabled={authentication.isLoading}>
                                {authentication.isLoading ? '載入中...' : '登入'}
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className='position-fixed error-corner'>
        {
            errors.map(e => (
                <div key={e.message_zh} className='toast showing' role='alert' aria-live='assertive' aria-atomic='true'>
                    <div className='toast-header'>
                        <img src='/images/favicon.ico' className='rounded mr-2' alt='toast-logo' />
                        <strong className='mr-auto'>{'錯誤訊息'}</strong>
                    </div>
                    <div className='toast-body'>{e.message_zh || '登入出現錯誤'}</div>
                </div>
            ))
        }
        </div>
        </div>
    )
});

export default {
    component: Login
}