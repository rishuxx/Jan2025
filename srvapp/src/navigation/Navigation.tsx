import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '@features/auth/SplashScreen';
import {navigationRef} from '@utils/NavigationUtils';
import DeliveryLogin from '@features/auth/DeliveryLogin';
import CustomerLogin from '@features/auth/CustomerLogin';
import ProductDashboard from '@features/auth/dashboard/ProductDashboard';
import DeliveryDashboard from '@features/delivery/DeliveryDashboard';
import ProductCategories from '@features/Pages/ProductCategories';

import ServenticaOriginals from '@features/Pages/ServenticaOrginals';
import ServicesPage from '@features/Pages/ServicesPage';
import RepairsPage from '@features/Pages/RepairsPage';
import OnDemandPage from '@features/Pages/OnDemandPage';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="ProductDashboard" component={ProductDashboard} />
        <Stack.Screen name="DeliveryDashboard" component={DeliveryDashboard} />
        <Stack.Screen name="ProductCategories" component={ProductCategories} />
        <Stack.Screen name="ServicesPage" component={ServicesPage} />
        <Stack.Screen name="RepairsPage" component={RepairsPage} />
        <Stack.Screen name="OnDemandPage" component={OnDemandPage} />
        <Stack.Screen
          name="ServenticaOriginals"
          component={ServenticaOriginals}
        />
        <Stack.Screen
          options={{animation: 'fade'}}
          name="DeliveryLogin"
          component={DeliveryLogin}
        />
        <Stack.Screen
          options={{animation: 'fade'}}
          name="CustomerLogin"
          component={CustomerLogin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
///
