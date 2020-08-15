import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
import {name as appName} from './index.json';
import {createStackNavigator} from "@react-navigation/stack";
import splash from "./src/Screens/splashScreen";
import {NavigationContainer} from '@react-navigation/native';
import login from './src/Screens/login'
import register from "./src/Screens/register";



const Stack = createStackNavigator();



export default class App extends Component {

    render(){
           return( <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="splash"
                        initialRouteName={splash}
                        component={splash}
                        options={{headerShown: false}}

                    />
                    <Stack.Screen
                        name="login"
                        component={login}
                        options={{headerShown: false}
                            }

                    />
                    <Stack.Screen
                        name="register"
                        component={register}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
           )
}
}


AppRegistry.registerComponent(appName, () => App)



