import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NovelProvider } from './context/NovelContext';
import { CookiesProvider } from 'react-cookie';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
      <NovelProvider>
        <Provider store={store}>
            <App />
        </Provider>
        </NovelProvider>
    </CookiesProvider>,
);

