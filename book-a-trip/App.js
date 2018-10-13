import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import Login from './Screens/Login';
import rootReducer from './Reducers/index';
const config = {
  key: 'root',
  whitelist: [],
  storage
}
const PR = persistReducer(config, rootReducer)
let store = createStore(PR);
let persistor = persistStore(store);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Stack key="root">
              <Scene key="login" component={Login} />
            </Stack>
          </Router>
        </PersistGate>
      </Provider >
    );
  }
}

