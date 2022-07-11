import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "boxicons/css/boxicons.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

// axios general configs
axios.defaults.baseURL = "https://online-shop-back-end-api.herokuapp.com/api";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});
axios.defaults.withCredentials = true;

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));