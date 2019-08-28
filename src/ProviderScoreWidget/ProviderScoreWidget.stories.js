import React from 'react';
import { View, Alert, Text } from 'react-native'
import { storiesOf } from '@storybook/react-native';
import ProviderScoreWidget from './ProviderScoreWidget.Composition'

const CenteredView = ({ children }) => (
    <View style={style}>
        {children}
    </View>
)
const style = {
    flex: 1,
    width: '100%',
    backgroundColor: '#0291DA',
    justifyContent: 'center',
    alignItems: 'center',

};


export default storiesOf(
    'ProviderScoreWidget Screen',
    module
).add(
    'standard',
    () => (
        <ProviderScoreWidget
            />
    )
)