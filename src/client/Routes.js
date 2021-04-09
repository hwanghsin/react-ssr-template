import React from 'react';
import App from './App';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Vocab from './pages/Vocab';
import Setting from './pages/Setting';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
        name: '首頁'
      },
      {
        ...Blog,
        path: '/blog',
        name: '部落格'
      },
      {
        ...Vocab,
        path: '/vocab',
        name: '單字庫'
      },
      {
        ...Setting,
        path: '/setting',
        name: '進階設定'
      },
      {
        ...Login,
        path: '/login',
        name: '登入'
      },
      { ...NotFound }
    ]
  }
];