import React, { Component } from 'react'
import { Alert } from 'react-native'
import ProfileWidgetComposition from './ProfileWidget.Composition'

// Note: the profileImageURI will come from a web address, not locally!

class ProfileWidgetContainer extends Component {
    render() {
        return (
            <ProfileWidgetComposition
                profileImageURI={'https://facebook.github.io/react-native/docs/assets/favicon.png'}
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