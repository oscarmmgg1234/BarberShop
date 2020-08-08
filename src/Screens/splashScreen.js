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

        return <View style={Styles.mainView}>
            <View style={Styles.topHeader}><Text style={Styles.MHLabel}>Barberia</Text><Text>Get your hair ruined here!</Text>
                <Image source={require("../ASSETS/barberLogo.png")} style={{width: 200, height:200}}/></View>
            <View></View>
        </View>
    }

}

const Styles = StyleSheet.create({
    mainView:{
        backgroundColor:"black",
        flex: 1
    },
    topHeader:{
        backgroundColor: "white",
        flex: 0.3,
        alignItems: "center"
    },
    MHLabel: {
        marginTop: 100

    }
})




export default splash;
