import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import Characters from './components/Characters';

function App() {
  return (
    <Provider store={configureStore()}>
      <div>
        <Characters />
      </div>
    </Provider>
  );
}

export default App;
