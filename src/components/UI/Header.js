import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'native-base';
import Spacer from './Spacer';

const Header = ({ title, content }) => (
  <View>
    <Spacer size={25} />
    <Text>{title}</Text>
    {!!content && (
      <View>
        <Spacer size={10} />
        <Text>{content}</Text>
      </View>
    )}
    <Spacer size={25} />
  </View>
);

Header.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Header.defaultProps = {
  title: 'Missing title',
  content: '',
};

export default Header;
