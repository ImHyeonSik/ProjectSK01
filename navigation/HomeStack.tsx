
import React, {useEffect} from 'react'
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import Home from '../view/home/Home';
import Detail from '../view/home/Detail';


const Stack = createNativeStackNavigator();
const HomeStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        component={Home}/>

      <Stack.Screen
        name="Detail"
        component={Detail}/>

    </Stack.Navigator>
  )
}
export default HomeStack;
