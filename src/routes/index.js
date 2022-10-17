import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';

import { ArticlesForm, ArticlesList, ArticlesSingle } from '../containers';

import AboutComponent from '../components/About';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Scene
          key="home"
          title={AppConfig.appName}
          icon={() => <Icon name="planet" {...DefaultProps.icons} />}
          component={AboutComponent}
          {...DefaultProps.navbarProps}
        />

        <Scene
          key="articlesList"
          title="Articles List"
          icon={() => <Icon name="list" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
          component={ArticlesList}
        />

        <Scene
          key="form"
          title="Articles Form"
          icon={() => <Icon name="add" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
          component={ArticlesForm}
        />
      </Tabs>
      <Scene key="articlesSingle" component={ArticlesSingle} back />
    </Scene>
  </Stack>
);

export default Index;
