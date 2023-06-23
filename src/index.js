import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { CookiesProvider } from 'react-cookie';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </CookiesProvider>,
);

