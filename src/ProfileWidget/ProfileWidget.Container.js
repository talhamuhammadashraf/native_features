import React, { Component } from 'react'
import { Alert } from 'react-native'
import ProfileWidgetComposition from './ProfileWidget.Composition'

// The Container is where our dev team will eventually
// "plug-and-play" the business logic into the components
// you create. FYI, our team uses Redux for this (but outside
// the scope of this contract)

// The Container is the highest level entry point for the set
// of components (i.e. will be in the App.js)

class ProfileWidgetContainer extends Component {
    render() {
        return (
            <ProfileWidgetComposition
                profileImageURI={'Hey this is an example placeholder for a message our dev team to plug into later'}
                profileMessage={'Searching for Jane... including Aetna and two others...'}
                addInsuranceMessage={'Add your plan...'}
                addInsuranceMessage={'Add your plan...'}
                warningMessage={'Jane, tap here to add your coverage'}
                warningIcon={'green'}
                onPressProfile={()=>Alert.alert("This is a placeholder for onPressProfile")}
                onPressAddInsurance={()=>Alert.alert("This is a placeholder for onPressAddInsurance")}
                onPressWarning={()=>Alert.alert("This is a placeholder for onPressWarning")}
                />
        )
    }
}
export default ProfileWidgetContainer