import React from 'react';
import {} from 'react-native';
import {ImageBackground} from "react-native";
import {View} from "react-native";
import {Text} from "react-native";
import {TextInput} from "react-native";
import {TouchableOpacity} from "react-native";
import {Image} from "react-native";
import {StyleSheet} from "react-native";

class guest extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <>
                <ImageBackground source={require("../ASSETS/LoginBack.png")} style={{position: "absolute",width: 500,height: 1000}}/>
                <View style={styles.mainView}>
                    <Text style={styles.loginLabel}>Guest</Text>
                    <View style={styles.FormView}>
                        <Text style={styles.formsLabel}>Full Name: </Text>
                        <TextInput style={styles.forms}/>
                        <Text style={styles.formsLabel} >Email: </Text>
                        <TextInput style={styles.forms}/>
                        <TouchableOpacity style={styles.submitBtn}><Text>Continue</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('splash')}><Image source={require("../ASSETS/scizors.png")} style={{height: 70,width: 70,marginTop: 230,borderRadius: 70,
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

    }


})

export default guest;