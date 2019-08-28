import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf(
    'CenteredView',
    module
).add(
    'default view',
    () => (
        <CenteredView>
            <Text>Hello Storybook Take One</Text>
        </CenteredView>
    )
).add(
    'default view2',
    () => (
        <CenteredView>
            <Text>Hello Storybook Take Two</Text>
        </CenteredView>
    )
);