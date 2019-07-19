// This allows the store to be available for the App. We do this with Provider

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

// This allows the the store to be available to the app nested components
import { Provider } from 'react-redux';

// Make the store available to the rest of the app
import store from './store/store.jsx';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)


