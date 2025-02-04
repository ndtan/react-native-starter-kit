import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Stack } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';
import SplashScreen from 'react-native-splash-screen';

import { NativeBaseProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import theme from '../native-base-theme/variables/commonColor';
import { setI18nConfig } from './translations';

import Routes from './routes/index';
import Loading from './components/UI/Loading';

class App extends React.Component {
  constructor() {
    super();
    setI18nConfig();
    this.state = { loading: true };
  }

  async componentDidMount() {
    SplashScreen.hide();
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    const { store, persistor } = this.props;

    if (loading) {
      return <Loading />;
    }

    return (
      <NativeBaseProvider>
        <Provider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <Router>
              <Stack key="root">{Routes}</Stack>
            </Router>
          </PersistGate>
        </Provider>
      </NativeBaseProvider>
    );
  }
}

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default App;
