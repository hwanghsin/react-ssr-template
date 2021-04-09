import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { firebaseApp } from '../../helpers/firebase';
// Actions 
import {
    toggleSideMenu,
    toggleHeaderSetting,
    changeHeaderUsername
} from '../../redux/navigation/actions';
import {
    changeUsername,
    changePassword,
    login,
    logout
} from '../../redux/authentication/actions';
import {
    createType,
    fetchTypes,
    deleteType
} from '../../redux/type/actions';
import { fetchMyInfo } from '../../redux/user/actions';
import {
    changeTypeName
} from '../../redux/blog/actions';
import {
    selectParentCategory,
    changeCategoryName,
    changeVocabWord,
    changeVocabDesc,
    toggleReady,
    toggleShowModal,
    fetchVocabs,
    createVocab
} from '../../redux/vocab/actions';

const NavWrap = WrappedComponent => {
    const HOC = props => <WrappedComponent {...props} />;
    const mapStateToProps = state => ({
        navigation: state.Navigation,
        user: state.User
    });
    const actions = {
        logout,
        // Navigation
        toggleSideMenu,
        toggleHeaderSetting,
        changeHeaderUsername
    }
    return connect(mapStateToProps, actions)(withRouter(HOC));
}

const AuthWrap = WrappedComponent => {
    class HOC extends Component {
        componentDidMount() {
            switch (this.props.history.location.pathname) {
                case '/vocab':
                    this.props.fetchTypes();
                    this.props.fetchVocabs();
                    break;
                case '/setting':
                    this.props.fetchTypes();
                    break;
                default:
            }
            setTimeout(() => {
                this.props.toggleReady();
            }, 1000);
        }
        render() {
            firebaseApp.auth().onAuthStateChanged(user => {
                if(!user) {
                    this.props.history.replace('/login');
                    return;
                }
                if (user && !(this.props.user.myInfo)) {
                    this.props.fetchMyInfo(user);
                }
            });
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }
    const mapStateToProps = state => ({
        errors: state.Error,
        user: state.User,
        types: state.Type,
        blog: state.Blog,
        vocab: state.Vocab
    });
    const actions = {
        fetchMyInfo,
        // Type 
        createType,
        fetchTypes,
        deleteType,
        // Blogs 
        changeTypeName,
        // Vocab 
        changeVocabWord,
        changeVocabDesc,
        selectParentCategory,
        changeCategoryName,
        toggleShowModal,
        toggleReady,
        fetchVocabs,
        createVocab
    }
    return connect(mapStateToProps, actions)(withRouter(HOC));
}

const LoginWrap = WrappedComponent => {
    const HOC = props => {
        firebaseApp.auth().onAuthStateChanged(user => {
            if(user) {
                this.props.location.replace('/');
                return;
            }
        });
        return <WrappedComponent {...props} />
    }
    const mapStateToProps = state => ({
        authentication: state.Authentication,
        errors: state.Error
    });
    const actions = {
        changeUsername,
        changePassword,
        login
    }
    return connect(mapStateToProps, actions)(HOC);
}

export {
    NavWrap,
    AuthWrap,
    LoginWrap
}