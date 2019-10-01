import {createStackNavigator} from 'react-navigation-stack'
import {Provider,ProviderAddress} from './src'
export default createStackNavigator({
    editProfile:Provider,
    editAddress:ProviderAddress
},{
    // headerMode:'screen'
})