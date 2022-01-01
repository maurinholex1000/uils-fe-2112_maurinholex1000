import * as React from 'react';
import reducers from './store/reducers';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import AppStackNavigator from './Routes/StackNavigator';
import {createStore} from 'redux';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <AppStackNavigator />
    </Provider>
  );
};

export default App;
