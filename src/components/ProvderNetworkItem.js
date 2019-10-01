import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native';
import * as Metrics from '../configure/style'
export default ({
onPressEdit,
onPressCancel,
id,
name,
coverageType,
networkType,
region,
description,
directory_url,
generic,
distributionType,
date_created,
date_updated,
owner,
})=>{
    console.log('here')
    return(
    <View style={{
        backgroundColor:'white',
        elevation:15,
        borderRadius:12,
        alignSelf:'center',
        paddingHorizontal:Metrics.spacing.md,
        paddingVertical:Metrics.spacing.md,
    }}>
    <Text>{name}</Text>
    <Text>{coverageType}</Text>
<Text>{networkType}</Text>
<Text>{region}</Text>
<Text>{description}</Text>
<Text>{directory_url}</Text>
<Text>{generic}</Text>
<Text>{distributionType}</Text>
<Text>{date_created}</Text>
<Text>{date_updated}</Text>
<Text>{owner}</Text>


    </View>
)}