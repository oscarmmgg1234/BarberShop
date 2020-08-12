import React, {Component} from 'react';
import SplashScreen from "react-native-splash-screen";
import {Text,View,StyleSheet,Image,TouchableOpacity,ImageBackground} from "react-native";


class splash extends Component {
    constructor(props) {
        super(props);
    }



    componentDidMount() {
        SplashScreen.hide()
    }
render(){

        return(<>
        <ImageBackground source={require("../ASSETS/baberBackground.jpg")} style={{position: "absolute",width: 430,height: 900

            }}/>
        <View style= {styles.mainView} >
            <Image source={require("../ASSETS/barberLogo.png")} style={styles.topHeaderLogo}/>
            <View style={styles.topHeader}><Text style={styles.MHLabel}>CUT</Text><Text style={styles.MHLabel}>The perfect place to get your hair ruined!</Text>

            </View>
            <View style={styles.mainButtonView}>
                <TouchableOpacity style={styles.mainButton}><Text>Register</Text></TouchableOpacity>
                <TouchableOpacity style={styles.loginButton}><Text>Login</Text></TouchableOpacity>
                <TouchableOpacity style={styles.mainButton}><Text>Guest</Text></TouchableOpacity>
            </View>


    </View>
            </>
    )
}

}



const styles = StyleSheet.create({
    mainView:{
        backgroundColor:"rgba(0,0,0,0.1)", //beautiful green 20,200,50,0.1)
        flex: 1,

    },
    topHeader:{
        backgroundColor: "rgba(0,0,0,0.1)",
        flex: 3,

        alignItems: "center",

    },
    MHLabel: {
        marginTop:25,
fontSize: 40,
        color: "rgba(250,255,245,0.9)",
        fontFamily: "times"

    },
    topHeaderLogo: {
        width: 200,
        height: 200,
        alignSelf: "center",
        marginTop: 35
    },
    mainButton: {
    height: 40,
        width: 90,
        backgroundColor: "rgba(255,190,0,0.9)",
        borderRadius: 3,
        marginHorizontal: 15
        ,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40

    },
    loginButton:{
        height: 40,
        width: 90,
        backgroundColor: "rgba(255,190,0,0.9)",
        borderRadius: 3,
        marginHorizontal: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 80
    },
    mainButtonView: {
        justifyContent: "center",
        flexDirection: "row",
    alignContent: "space-around",
        alignItems: "flex-end",
        flex: 3,
        backgroundColor: "rgba(0,0,0,0.1)"
        
    }
})





export default splash;
