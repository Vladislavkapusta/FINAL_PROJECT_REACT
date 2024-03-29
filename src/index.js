import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './store';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


export const BASE_URL = 'https://backend-garden.onrender.com'
// export const BASE_URL = 'http://localhost:3333'
// export const BASE_URL = 'https://project-fe-vxeu.onrender.com'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}> 
       <App />
</Provider>

);


