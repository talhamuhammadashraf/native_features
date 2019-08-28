import React, { Component } from 'react'
import { Alert } from 'react-native'
import { FormikWrapper } from '../common/HOCs/FormikWrapper';
import SearchFilterLocationComponent from './SearchFilterLocation.Component'

// This is a placeholder for where we store
// "state" and lifecycle logic for the component.
// The intent is that every component beneath
// this component in the tree will be a "dumb" (function)
// component, and that any "class" functionality needed down
// the tree will be passed down from here as props

class SearchFilterLocationComposition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideInIsDisplayed: false,
            //Bar
            filters_isOn: false,
            type_isOn: false,
            moreOptions_isOn: false,
            //Popup
            sortBy_Type_isOn: false,
            sortBy_Name_isOn: false,
            type_state_isOn: false,
            type_zipcode_isOn: false,
            type_name_isOn: false,
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
    onPressMoreOptions = () => {
        this.setState({slideInIsDisplayed: true})
        Alert.alert('onPressMoreOptions')
    }

    // Pop up menu
    onPressSortBy_Type = () => Alert.alert('onPressSortBy_Type')
    onPressSortBy_Name = () => Alert.alert('onPressSortBy_Name')
    onPressType_State = () => Alert.alert('onPressType_State')
    onPressType_Zipcode = () => Alert.alert('onPressType_Zipcode')
    onPressType_Name = () => Alert.alert('onPressType_Name')

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
            moreOptions_isOn,
            sortBy_Type_isOn,
            sortBy_Name_isOn,
            type_state_isOn,
            type_zipcode_isOn,
            type_name_isOn,
        } = this.state
        const {
            onPressFilters,
            onPressType,
            onPressMoreOptions,
            onPressSortBy_Type,
            onPressSortBy_Name,
            onPressType_State,
            onPressType_Zipcode,
            onPressType_Name,
            onPressReset,
            onPressDone,

        } = this
        return (
            <SearchFilterLocationComponent
                {...this.props}
                slideInIsDisplayed={slideInIsDisplayed}
                filters_isOn={filters_isOn}
                type_isOn={type_isOn}
                moreOptions_isOn={moreOptions_isOn}
                sortBy_Type_isOn={sortBy_Type_isOn}
                sortBy_Name_isOn={sortBy_Name_isOn}
                type_state_isOn={type_state_isOn}
                type_zipcode_isOn={type_zipcode_isOn}
                type_name_isOn={type_name_isOn}
                onPressFilters={onPressFilters}
                onPressType={onPressType}
                onPressMoreOptions={onPressMoreOptions}
                onPressSortBy_Type={onPressSortBy_Type}
                onPressSortBy_Name={onPressSortBy_Name}
                onPressType_State={onPressType_State}
                onPressType_Zipcode={onPressType_Zipcode}
                onPressType_Name={onPressType_Name}
                onPressReset={onPressReset}
                onPressDone={onPressDone}

                />
        )
    }
}

export default FormikWrapper(SearchFilterLocationComposition)