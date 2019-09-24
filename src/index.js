import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Home from './components/Home';
import Avatar from './components/Avatar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <div>
    <Avatar />
    </div>,
    
    document.getElementById('root'));

serviceWorker.unregister();
