import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ContentProvider} from './context';

import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import colors from './styles/color';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <ContentProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="BlogListScreen"
            component={BlogList}
            options={{
              headerTitle: 'Blog Maestrocr',
              headerStyle: {backgroundColor: colors.dark_background},
              headerTitleStyle: {color: colors.orange},
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="BlogDetailScreen"
            component={BlogDetail}
            options={{
              headerTitle: 'Blog Detail',
              headerStyle: {backgroundColor: colors.orange},
              headerTitleStyle: {color: colors.dark_background},
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </ContentProvider>
    </NavigationContainer>
  );
};
export default Router;
