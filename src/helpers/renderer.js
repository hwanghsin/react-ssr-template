import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic();
  return `
    <html>
      <head>
        <meta charset='utf-8'/>
        <meta name='viewport' content='width=device-width,initial-scale=1,user-scalable=no'/>
        <meta http-equiv='X-UA-Compatible' content='ie=edge'/>
        <link rel='shortcut icon' href='/images/favicon.ico'/>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/quill.snow.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <script src="/js/quill.min.js"></script>
        <script src="/js/image-resize.min.js"></script>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};