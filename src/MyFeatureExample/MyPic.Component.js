import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'


const MyPicComponent = props => {
    const { outerWrapper, imageStyle } = styles
    return(
        <View
            style={outerWrapper}>
            <Text>
                Here is an image pulling from the ./src/common/assets/
            </Text>
            <Image
                style={imageStyle}
                source={require("common/assets/coming-soon.orig.png")}

                />
        </View>
    )
}

const styles = StyleSheet.create({
    outerWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        width: 125,
        height: 125,
    }
})

export default MyPicComponent
