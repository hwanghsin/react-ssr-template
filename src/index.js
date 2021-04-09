import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const PORT = 6001;
const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore(req);
  // 利用react router config來判斷匹配的路徑跟元件
  // 這會產生一個回傳該元件的取資料方法(loadData)
  // promises是一個裝promise的陣列
  // 元件裡的方法會使用store來dispatch我們自訂的actions
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      // 這裡的功能就是在元件渲染前先把redux的資料撈出來(包含打API)
      // 使用這個方法就不需要connect在前端渲染後再顯示資料
      // 這樣的方法可以達到Server Side Render的目的
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    // 所有資料都先撈好後在這裡把html渲染出來
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on prot ${PORT}`);
});