import React, {Component} from 'react';
import SplashScreen from "react-native-splash-screen";
import {Text,View,StyleSheet} from "react-native";


class splash extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        SplashScreen.hide()
    }
render(){

        return <View style= {styles.viewContainer}>
    </View>
}

}



export default splash;
