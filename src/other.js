import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store';
import Canvas from '@/components/canvas';

const root = ReactDOM.createRoot(document.getElementById('other'));
root.render(
    <div>
      other
      <Canvas />
    </div>
    
);
