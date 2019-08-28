import React, { Component } from 'react'
import { Alert } from 'react-native'
import { FormikWrapper } from '../common/HOCs/FormikWrapper';
import SearchFilterSponsorsComponent from './SearchFilterSponsors.Component'

// This is a placeholder for where we store
// "state" and lifecycle logic for the component.
// The intent is that every component beneath
// this component in the tree will be a "dumb" (function)
// component, and that any "class" functionality needed down
// the tree will be passed down from here as props

class SearchFilterSponsorsComposition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideInIsDisplayed: false,
            //Bar
            filters_isOn: false,
            type_isOn: false,
            location_isOn: false,
            moreOptions_isOn: false,
            //Popup
            sortBy_Type_isOn: false,
            sortBy_Name_isOn: false,
            type_Employer_isOn: false,
            type_University_isOn: false,
            location_ChooseAnother_isOn: false,
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
    onPressType = () => Alert.alert('onPressType')
    onPressLocation = () => Alert.alert('onPressLocation')
    onPressMoreOptions = () => {
        this.setState({slideInIsDisplayed: true})
        Alert.alert('onPressMoreOptions')
    }


    // Pop up menu
    onPressSortBy_Type = () => Alert.alert('onPressSortBy_Type')
    onPressSortBy_Name = () => Alert.alert('onPressSortBy_Name')
    onPressType_Employer = () => Alert.alert('onPressType_Employer')
    onPressType_University = () => Alert.alert('onPressType_University')
    onPressLocation_ChooseAnother = () => Alert.alert('onPressLocation_ChooseAnother')

    // Callbacks that gets invoked AFTER the menu slides up/in is dismissed
    onPressReset = () => Alert.alert('onPressReset')
    onPressDone = () => {
        this.setState({slideInIsDisplayed: false})
        Alert.alert('onPressDone')
    }


    render() {
        const {
            slideInIsDisplayed,
            filters_isOn,
            type_isOn,
            location_isOn,
            moreOptions_isOn,
            sortBy_Type_isOn,
            sortBy_Name_isOn,
            type_Employer_isOn,
            type_University_isOn,
            location_ChooseAnother_isOn,
        } = this.state
        const {
            onPressFilters,
            onPressType,
            onPressLocation,
            onPressMoreOptions,
            onPressSortBy_Type,
            onPressSortBy_Name,
            onPressType_Employer,
            onPressType_University,
            onPressLocation_ChooseAnother,
            onPressReset,
            onPressDone,
        } = this
        return (
            <SearchFilterSponsorsComponent
                {...this.props}
                slideInIsDisplayed={slideInIsDisplayed}
                filters_isOn={filters_isOn}
                type_isOn={type_isOn}
                location_isOn={location_isOn}
                moreOptions_isOn={moreOptions_isOn}
                sortBy_Type_isOn={sortBy_Type_isOn}
                sortBy_Name_isOn={sortBy_Name_isOn}
                type_Employer_isOn={type_Employer_isOn}
                type_University_isOn={type_University_isOn}
                location_ChooseAnother_isOn={location_ChooseAnother_isOn}
                onPressFilters={onPressFilters}
                onPressType={onPressType}
                onPressLocation={onPressLocation}
                onPressMoreOptions={onPressMoreOptions}
                onPressSortBy_Type={onPressSortBy_Type}
                onPressSortBy_Name={onPressSortBy_Name}
                onPressType_Employer={onPressType_Employer}
                onPressType_University={onPressType_University}
                onPressLocation_ChooseAnother={onPressLocation_ChooseAnother}
                onPressReset={onPressReset}
                onPressDone={onPressDone}
                />
        )
    }
}

export default FormikWrapper(SearchFilterSponsorsComposition)