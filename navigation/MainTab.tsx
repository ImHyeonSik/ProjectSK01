import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../view/home/Home';
import Sub from '../view/sub/Sub';
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        // options={({route}) => ({
        //   // tabBarVisible: getVisibility(route, 1),
        //   // tabBarVisible: true,
        //   tabBarLabel: 'home',
        // })}
      />
      <Tab.Screen
        name="Sub"
        component={Sub}
        // component={data => Chatting({...data, socket})}
        // options={({route}) => ({
        //   // tabBarVisible: getVisibility(route, 2),
        //   tabBarLabel: 'sub',
        // })}
        // initialParams={{ memberSeq: -1 }}
      />
    </Tab.Navigator>
  );
};
export default MainTab;
