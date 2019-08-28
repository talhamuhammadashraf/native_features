import React from 'react';
import { View, Alert, Text } from 'react-native'
import { storiesOf } from '@storybook/react-native';
import MyFeatureExampleComposition from './MyFeatureExample.Composition'

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
    'MyFeature Example Screen',
    module
).add(
    'standard',
    () => (
        <MyFeatureExampleComposition
            title={'My variable'}
            message={'My message prop here'}
            initialValues={{
                email: '',
                password: '',
                }}
            initialIsValid={false}
            isLoading={false}
            jwtErrorMessage={"Error: We coudn't find your account using that email and password."}
            validate={()=>({})}
            onSubmit={()=>Alert.alert('onSubmit')}
            goToSubscribeScreen={()=>Alert.alert('goToSubscribeScreen')}
            goToForgotPasswordScreen={()=>Alert.alert('goToForgotPasswordScreen')}
            />
    )
)