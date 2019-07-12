import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
// import { Alert } from 'bootstrap-4-react';
import './main.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();