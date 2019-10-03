import { createStackNavigator } from 'react-navigation-stack';
import {
  Provider,
  ProviderAddress,
  ProviderWebsite,
  ProviderEmail,
  ProviderPhone,
} from './src';
export default createStackNavigator(
  {
    editProfile: Provider,
    editAddress: ProviderAddress,
    editWebsite: ProviderWebsite,
    editEmail: ProviderEmail,
    editPhone: ProviderPhone,
  },
  {
    // headerMode:'screen'
  }
);
