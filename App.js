import React from 'react';
import codePush from 'react-native-code-push';
import Root from './src/index';
import configureStore from './src/store/index';

const { persistor, store } = configureStore();

function App() {
  return <Root store={store} persistor={persistor} />;
}

export default codePush(App);
