import React, {Component} from 'react';
import {Text,StyleSheet,TextInput,View,TouchableOpacity,ImageBackground,Image} from "react-native";
import CheckBox from '@react-native-community/checkbox';

class login extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <>

            <ImageBackground source={require("../ASSETS/LoginBack.png")} style={{position: "absolute",width: 500,height: 1000}}/>
            <View style={styles.mainView}>
                <Text style={styles.loginLabel}>Login</Text>
                <View style={styles.FormView}>
                <Text style={styles.formsLabel}>Username: </Text>
            <TextInput style={styles.forms}/>
                <Text style={styles.formsLabel} >Password: </Text>
            <TextInput style={styles.forms}/>
                    <View style={styles.Submitview}>
                    <TouchableOpacity style={styles.submitBtn}><Text>Continue</Text></TouchableOpacity>
                    <CheckBox style={styles.checkBox}/>
                        <Text style={styles.rememberLabel}> Remember me!</Text>
                    </View>
                   <TouchableOpacity onPress={()=>this.props.navigation.navigate('splash')}><Image source={require("../ASSETS/scizors.png")} style={{height: 70,width: 70,marginTop: 220,borderRadius: 70,
                       borderColor: "black",borderWidth: 4}}/></TouchableOpacity>

                </View>
            </View>
                </>
        )
            }

}

const styles = StyleSheet.create({

forms: {
    height: 30,
    width: 300,
    backgroundColor: "rgba(255,255,255,0.8)",
    marginTop: 15,
    borderRadius: 5

},
    mainView:{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.8)",

    },
    formsLabel: {
        fontFamily: "times",
        fontSize: 20,
        color: "white",
        marginTop: 10,

    },
    FormView: {
    marginTop: 150,
        alignItems: "center"
    },
    loginLabel: {
    fontSize: 50,
        color: "white",
        alignSelf: "center",
        marginTop: 100,
        fontFamily: "times"
    },
    submitBtn:{
    marginTop: 60,
    color: "white",
        backgroundColor: "orange",
        width: 120,
        height: 40,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "times"

    },
    checkBox: {
    height: 30,
        width: 30,
marginLeft: 40,
        marginTop: 55
    },
    Submitview: {
    flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width:200,
        height: 100

    },
    rememberLabel: {
        marginTop: 55,
        color: "white",
        fontFamily: "times",
        marginLeft: 10
    }


})

export default login;