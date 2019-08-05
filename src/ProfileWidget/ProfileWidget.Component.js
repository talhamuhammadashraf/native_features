import React from 'react'
import { View, ImageBackground, Text, StyleSheet } from 'react-native'
// This is where the "component" design begins!

const ProfileWidgetComponent = props => {
    const {
        imageBG,
        outerWrapper,
        textStyle
    } = styles
    return(
        <ImageBackground
            source={require("common/assets/maps_screenshot.png")}
            style={imageBG}>
            <View
                style={outerWrapper}>
                <Text style={textStyle}>
                    Your code here (background is a screenshot)
                </Text>
            </View>
        </ImageBackground>
    )
}

styles = StyleSheet.create({
    imageBG: {
        flex: 1,
    },
    outerWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'red',
    },
})

export default ProfileWidgetComponent
