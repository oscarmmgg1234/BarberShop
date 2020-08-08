import React, {Component} from 'react';
import SplashScreen from "react-native-splash-screen";
import {Text,View,StyleSheet,Image} from "react-native";


class splash extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        SplashScreen.hide()
    }
render(){

        return <View style= {styles.viewContainer}>
            <View><Text>CUT</Text><Text>The perfect place to get your hair ruined!</Text>
            <Image/>
            </View>
            


    </View>
}

}



export default splash;
