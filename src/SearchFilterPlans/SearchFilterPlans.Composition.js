import React, { Component } from 'react'
import { Alert } from 'react-native'
import { FormikWrapper } from '../common/HOCs/FormikWrapper';
import SearchFilterPlansComponent from './SearchFilterPlans.Component'

// This is a placeholder for where we store
// "state" and lifecycle logic for the component.
// The intent is that every component beneath
// this component in the tree will be a "dumb" (function)
// component, and that any "class" functionality needed down
// the tree will be passed down from here as props

class SearchFilterPlansComposition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideInIsDisplayed: false,
            //Bar
            filters_isOn: false,
            type_isOn: false,
            source_isOn: false,
            year_isOn: false,
            location_isOn: false,
            moreOptions_isOn: false,
            //Popup
            sortBy_Type_isOn: false,
            sortBy_Payor_isOn: false,
            sortBy_Name_isOn: false,
            year_2019_isOn: false,
            year_2020_isOn: false,
            source_Individual_isOn: false,
            source_Employer_isOn: false,
            source_Medicaid_isOn: false,
            source_Medicare_isOn: false,
            sponsors_EditMyProfile_isOn: false,
            type_Medical_isOn: false,
            type_Dental_isOn: false,
            type_Vision_isOn: false,
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
    onPressSource = () => Alert.alert('onPressSource')
    onPressYear = () => Alert.alert('onPressYear')
    onPressLocation = () => Alert.alert('onPressLocation')
    onPressMoreOptions = () => {
        this.setState({slideInIsDisplayed: true})
        Alert.alert('onPressMoreOptions')
    }


    // Pop up menu
    onPressSortBy_Type = () => Alert.alert('onPressSortBy_Type')
    onPressSortBy_Payor = () => Alert.alert('onPressSortBy_Payor')
    onPressSortBy_Name = () => Alert.alert('onPressSortBy_Name')
    onPressYear_2019 = () => Alert.alert('onPressYear_2019')
    onPressYear_2020 = () => Alert.alert('onPressYear_2020')
    onPressSource_Individual = () => Alert.alert('onPressSource_Individual')
    onPressSource_Employer = () => Alert.alert('onPressSource_Employer')
    onPressSource_Medicaid = () => Alert.alert('onPressSource_Medicaid')
    onPressSource_Medicare = () => Alert.alert('onPressSource_Medicare')
    onPressSponsors_EditMyProfile = () => Alert.alert('onPressSponsors_EditMyProfile')
    onPressType_Medical = () => Alert.alert('onPressType_Medical')
    onPressType_Dental = () => Alert.alert('onPressType_Dental')
    onPressType_Vision = () => Alert.alert('onPressType_Vision')
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
            source_isOn,
            year_isOn,
            location_isOn,
            moreOptions_isOn,
            sortBy_Type_isOn,
            sortBy_Payor_isOn,
            sortBy_Name_isOn,
            year_2019_isOn,
            year_2020_isOn,
            source_Individual_isOn,
            source_Employer_isOn,
            source_Medicaid_isOn,
            source_Medicare_isOn,
            sponsors_EditMyProfile_isOn,
            type_Medical_isOn,
            type_Dental_isOn,
            type_Vision_isOn,
            location_ChooseAnother_isOn,
        } = this.state
        const {
            onPressFilters,
            onPressType,
            onPressSource,
            onPressYear,
            onPressLocation,
            onPressMoreOptions,
            onPressSortBy_Type,
            onPressSortBy_Payor,
            onPressSortBy_Name,
            onPressYear_2019,
            onPressYear_2020,
            onPressSource_Individual,
            onPressSource_Employer,
            onPressSource_Medicaid,
            onPressSource_Medicare,
            onPressSponsors_EditMyProfile,
            onPressType_Medical,
            onPressType_Dental,
            onPressType_Vision,
            onPressLocation_ChooseAnother,
            onPressReset,
            onPressDone,
        } = this
        return (
            <SearchFilterPlansComponent
                {...this.props}
                slideInIsDisplayed={slideInIsDisplayed}
                filters_isOn={filters_isOn}
                type_isOn={type_isOn}
                source_isOn={source_isOn}
                year_isOn={year_isOn}
                location_isOn={location_isOn}
                moreOptions_isOn={moreOptions_isOn}
                sortBy_Type_isOn={sortBy_Type_isOn}
                sortBy_Payor_isOn={sortBy_Payor_isOn}
                sortBy_Name_isOn={sortBy_Name_isOn}
                year_2019_isOn={year_2019_isOn}
                year_2020_isOn={year_2020_isOn}
                source_Individual_isOn={source_Individual_isOn}
                source_Employer_isOn={source_Employer_isOn}
                source_Medicaid_isOn={source_Medicaid_isOn}
                source_Medicare_isOn={source_Medicare_isOn}
                sponsors_EditMyProfile_isOn={sponsors_EditMyProfile_isOn}
                type_Medical_isOn={type_Medical_isOn}
                type_Dental_isOn={type_Dental_isOn}
                type_Vision_isOn={type_Vision_isOn}
                location_ChooseAnother_isOn={location_ChooseAnother_isOn}
                onPressFilters={onPressFilters}
                onPressType={onPressType}
                onPressSource={onPressSource}
                onPressYear={onPressYear}
                onPressLocation={onPressLocation}
                onPressMoreOptions={onPressMoreOptions}
                onPressSortBy_Type={onPressSortBy_Type}
                onPressSortBy_Payor={onPressSortBy_Payor}
                onPressSortBy_Name={onPressSortBy_Name}
                onPressYear_2019={onPressYear_2019}
                onPressYear_2020={onPressYear_2020}
                onPressSource_Individual={onPressSource_Individual}
                onPressSource_Employer={onPressSource_Employer}
                onPressSource_Medicaid={onPressSource_Medicaid}
                onPressSource_Medicare={onPressSource_Medicare}
                onPressSponsors_EditMyProfile={onPressSponsors_EditMyProfile}
                onPressType_Medical={onPressType_Medical}
                onPressType_Dental={onPressType_Dental}
                onPressType_Vision={onPressType_Vision}
                onPressLocation_ChooseAnother={onPressLocation_ChooseAnother}
                onPressReset={onPressReset}
                onPressDone={onPressDone}
                />
        )
    }
}

export default FormikWrapper(SearchFilterPlansComposition)