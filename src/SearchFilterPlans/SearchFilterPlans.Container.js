import React, { Component } from 'react'
import { Alert } from 'react-native'
import SearchFilterPlansComposition from './SearchFilterPlans.Composition'

// IGNORE THIS FILE FOR NOW
// The Container is where our dev team will eventually
// "plug-and-play" the business logic into the components
// you create. FYI, our team uses Redux for this (but outside
// the scope of this contract)

// The Container is the highest level entry point for the set
// of components (i.e. will be in the App.js)

class SearchFilterPlansContainer extends Component {
    render() {
        return (
            <SearchFilterPlansComposition

                />
        )
    }
}
export default SearchFilterPlansContainer