import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import MessageComponent from './Message.Component'
import SampleButtonComponent from './SampleButton.Component'
import FormComponent from './Form.Component'
import IconComponent from './Icon.Component'
import MyPicComponent from './MyPic.Component'
// This is where the "component" design begins!

const MyFeatureExampleComponent = props => {
    const {
        outerWrapper,
        innerViewWrapperA,
        innerViewWrapperB,
        innerViewWrapperC,
        innerViewWrapperD,
        innerViewWrapperE,
        innerViewWrapperF,
    } = styles
    return(
        <View
            style={outerWrapper}>
            <View
                style={innerViewWrapperA}>
                <Text>Render a variable from props:</Text>
                <Text style={{color: 'white'}}>{props.title}</Text>
            </View>
            <View
                style={innerViewWrapperB}>
                <Text>Render a custom component</Text>
                <MessageComponent {...props}/>
            </View>
            <View
                style={innerViewWrapperC}>
                <Text>Render a custom component:</Text>
                <IconComponent {...props}/>
            </View>
            <View style={innerViewWrapperD}>
                <Text>Render a custom image:</Text>
                <MyPicComponent {...props}/>
            </View>
            <View
                style={innerViewWrapperE}>
                <Text>Render a custom component with a placeholder callback:</Text>
                <SampleButtonComponent {...props}/>
            </View>
            <View
                style={innerViewWrapperF}>
                <Text>Render a form component with a placeholder callback that submits the values</Text>
                <FormComponent {...props}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerWrapper: {
        flex: 1,
        margin: 20,
    },
    innerViewWrapperA: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    innerViewWrapperB: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },
    innerViewWrapperC: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    innerViewWrapperD: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    innerViewWrapperE: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    innerViewWrapperF: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
    },
})

export default MyFeatureExampleComponent
