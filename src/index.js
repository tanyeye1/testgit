import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ConfigProvider locale={zhCN}>

  //   <Provider store={store}>
      
  //       <HashRouter>
  //           <App />

  //       </HashRouter>
  //   </Provider>
  //   </ConfigProvider>
  <ConfigProvider locale={zhCN}>

    <Provider store={store}>
      
        <HashRouter>
            <App />

        </HashRouter>
    </Provider>
    </ConfigProvider>
    
);

