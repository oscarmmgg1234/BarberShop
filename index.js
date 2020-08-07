import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
import {name as appName} from './index.json';
import {createStackNavigator} from "react-navigation-stack";
import splash from "./src/Screens/splashScreen";
import {NavigationContainer} from '@react-navigation/native';


const Stack = createStackNavigator();

class App extends Component {

    render(){
           return( <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="plash"
                        component={splash}
                        options={{title: 'Welcome'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
           )
}
}


AppRegistry.registerComponent(appName, () => App);
