import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MessageComponent from './Message.Component'
import SubmitButtonComponent from './SubmitButton.Component'
import FormComponent from './Form.Component'

// This is where the "component" design begins!

const MyFeatureExampleComponent = props => {
    const {
        outerWrapper,
        innerViewWrapperA,
        innerViewWrapperB,
        innerViewWrapperC,
        innerViewWrapperD,
    } = styles
    return(
        <View
            style={outerWrapper}>
            <View
                style={innerViewWrapperA}>
                <Text>Render a variable from props:</Text>
                <Text>{props.title}</Text>
            </View>
            <View
                style={innerViewWrapperB}>
                <Text>Render a custom component:</Text>
                <MessageComponent {...props}/>
            </View>
            <View
                style={innerViewWrapperC}>
                <Text>Render a custom component with a placeholder callback:</Text>
                <SubmitButtonComponent {...props}/>
            </View>
            <View
                style={innerViewWrapperD}>
                <Text>Render a form component with a placeholder callback that submits the values</Text>
                <FormComponent {...props}/>
            </View>
        </View>
    )
}

styles = StyleSheet.create({
    outerWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerViewWrapperA: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
    },
    innerViewWrapperB: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    innerViewWrapperC: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    innerViewWrapperD: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
})

export default MyFeatureExampleComponent
