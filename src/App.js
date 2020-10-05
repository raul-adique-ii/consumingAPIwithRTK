import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

function App() {
  return (
    <Provider store={configureStore()}>
      <div>
        <h1>Rjing</h1>
      </div>
    </Provider>
  );
}

export default App;
