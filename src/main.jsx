import React from 'react'
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'; // Import du Provider depuis react-redux
import Store from './Redux/Store/Store'; 
import './main.css';
 
import App from "./App";
 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={Store}>
            <App />
        </Provider>
    </React.StrictMode>,
  )
  