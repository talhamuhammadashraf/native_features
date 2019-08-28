import React, { Component } from 'react'
import { Alert } from 'react-native'
import { FormikWrapper } from '../common/HOCs/FormikWrapper';
import SearchFilterProvidersComponent from './SearchFilterProviders.Component'

// This is a placeholder for where we store
// "state" and lifecycle logic for the component.
// The intent is that every component beneath
// this component in the tree will be a "dumb" (function)
// component, and that any "class" functionality needed down
// the tree will be passed down from here as props

class SearchFilterProvidersComposition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideInIsDisplayed: false,
            //Bar
            barFilters_isOn: true,
            barPlans_isOn: false,
            barOpenNow_isOn: false,
            barSaved_isOn: false,
            barMoreOptions_isOn: false,
            //Popup
            sortBy_Match_isOn: false,
            sortBy_Distance_isOn: false,
            sortBy_Rating_isOn: false,
            sortBy_Plan_isOn: false,
            plans_X_isOn: false,
            plans_EditMyProfile_isOn: false,
            network_All_isOn: false,
            network_InNetworkOnly_isOn: false,
            type_Person_isOn: true,
            type_Location_isOn: false,
            type_Organization_isOn: false,
            reset_isOn: false,
            done_isOn: false,
        }
    }

    componentDidMount(){

    }

    componentDidUpdate(){

    }
    componentWillUnmount(){

    }



    // Bar
    // Callbacks that gets invoked AFTER the menu slides up/in from the bottom
    onPressFilters = () => Alert.alert('onPressFilters')
    onPressPlans = () => Alert.alert('onPressPlans')
    onPressOpenNow = () => Alert.alert('onPressOpenNow')
    onPressSaved = () => Alert.alert('onPressSaved')
    onPressMoreOptions = () => {
        this.setState({slideInIsDisplayed: true})
        Alert.alert('onPressMoreOptions')
    }


    // Pop up menu
    onPressSortBy_Match = () => Alert.alert('onPressSortBy_Match')
    onPressSortBy_Distance = () => Alert.alert('onPressSortBy_Distance')
    onPressSortBy_Rating = () => Alert.alert('onPressSortBy_Rating')
    onPressSortBy_Plan = () => Alert.alert('onPressSortBy_Distance')
    onPressPlans_X = (plan) => Alert.alert('onPressPlans_X')
    onPressPlans_EditMyProfile = () => Alert.alert('onPressPlans_EditMyProfile')
    onPressNetwork_All = () => Alert.alert('onPressNetwork_All')
    onPressNetwork_InNetworkOnly = () => Alert.alert('onPressNetwork_InNetworkOnly')
    onPressType_Person = () => Alert.alert('onPressType_Person')
    onPressType_Location = () => Alert.alert('onPressType_Location')
    onPressType_Organization = () => Alert.alert('onPressType_Organization')

    // Callbacks that gets invoked AFTER the menu slides up/in is dismissed
    onPressReset = () => Alert.alert('onPressReset')
    onPressDone = () => {
        this.setState({slideInIsDisplayed: false})
        Alert.alert('onPressDone')
    }


    render() {
        const {
            slideInIsDisplayed,
            barFilters_isOn,
            barPlans_isOn,
            barOpenNow_isOn,
            barSaved_isOn,
            barMoreOptions_isOn,
            sortBy_Match_isOn,
            sortBy_Distance_isOn,
            sortBy_Rating_isOn,
            sortBy_Plan_isOn,
            plans_X_isOn,
            plans_EditMyProfile_isOn,
            network_All_isOn,
            network_InNetworkOnly_isOn,
            type_Person_isOn,
            type_Location_isOn,
            type_Organization_isOn,
            reset_isOn,
            done_isOn,
        } = this.state
        const {
            onPressFilters,
            onPressPlans,
            onPressOpenNow,
            onPressSaved,
            onPressMoreOptions,
            onPressSortBy_Match,
            onPressSortBy_Distance,
            onPressSortBy_Rating,
            onPressSortBy_Plan,
            onPressPlans_X,
            onPressPlans_EditMyProfile,
            onPressNetwork_All,
            onPressNetwork_InNetworkOnly,
            onPressType_Person,
            onPressType_Location,
            onPressType_Organization,
            onPressReset,
            onPressDone,
        } = this
        return (
            <SearchFilterProvidersComponent
                {...this.props}
                slideInIsDisplayed={slideInIsDisplayed}
                barFilters_isOn={barFilters_isOn}
                barPlans_isOn={barPlans_isOn}
                barOpenNow_isOn={barOpenNow_isOn}
                barSaved_isOn={barSaved_isOn}
                barMoreOptions_isOn={barMoreOptions_isOn}
                sortBy_Match_isOn={sortBy_Match_isOn}
                sortBy_Distance_isOn={sortBy_Distance_isOn}
                sortBy_Rating_isOn={sortBy_Rating_isOn}
                sortBy_Plan_isOn={sortBy_Plan_isOn}
                plans_X_isOn={plans_X_isOn}
                plans_EditMyProfile_isOn={plans_EditMyProfile_isOn}
                network_All_isOn={network_All_isOn}
                network_InNetworkOnly_isOn={network_InNetworkOnly_isOn}
                type_Person_isOn={type_Person_isOn}
                type_Location_isOn={type_Location_isOn}
                type_Organization_isOn={type_Organization_isOn}
                reset_isOn={reset_isOn}
                done_isOn={done_isOn}
                onPressFilters={onPressFilters}
                onPressPlans={onPressPlans}
                onPressOpenNow={onPressOpenNow}
                onPressSaved={onPressSaved}
                onPressMoreOptions={onPressMoreOptions}
                onPressSortBy_Match={onPressSortBy_Match}
                onPressSortBy_Distance={onPressSortBy_Distance}
                onPressSortBy_Rating={onPressSortBy_Rating}
                onPressSortBy_Plan={onPressSortBy_Plan}
                onPressPlans_X={onPressPlans_X}
                onPressPlans_EditMyProfile={onPressPlans_EditMyProfile}
                onPressNetwork_All={onPressNetwork_All}
                onPressNetwork_InNetworkOnly={onPressNetwork_InNetworkOnly}
                onPressType_Person={onPressType_Person}
                onPressType_Location={onPressType_Location}
                onPressType_Organization={onPressType_Organization}
                onPressReset={onPressReset}
                onPressDone={onPressDone}
                />
        )
    }
}

export default FormikWrapper(SearchFilterProvidersComposition)