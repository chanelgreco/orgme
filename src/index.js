import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ActivityDashboard from './Activity/ActivityDashboard';

ReactDOM.render(<ActivityDashboard />, document.getElementById('root'));
registerServiceWorker();
