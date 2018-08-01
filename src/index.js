import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ComplaintForm from './form'

ReactDOM.render(<ComplaintForm />, document.getElementById('root'));
registerServiceWorker();
