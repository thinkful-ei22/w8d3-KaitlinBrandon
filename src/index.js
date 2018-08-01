import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ComplaintForm from './form';
import createStore from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store = {createStore}>
<ComplaintForm />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
