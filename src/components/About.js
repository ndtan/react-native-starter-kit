import React from 'react';
import {
  Container, Box, Text
} from 'native-base';
import Spacer from './UI/Spacer';

const About = () => (
  <Container>
    <Box padder>
      <Spacer size={30} />
      <Text>Heading 1</Text>
      <Spacer size={10} />
      <Text>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
        {' '}
      </Text>

      <Spacer size={30} />
      <Text>Heading 2</Text>
      <Spacer size={10} />
      <Text>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
        {' '}
      </Text>

      <Spacer size={30} />
      <Text>Heading 3</Text>
      <Spacer size={10} />
      <Text>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
        {' '}
      </Text>
    </Box>
  </Container>
);

export default About;
