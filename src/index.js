import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';   //from './reducers/index';

import App from './components/app';

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
