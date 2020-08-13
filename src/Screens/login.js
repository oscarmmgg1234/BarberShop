import React, {Component} from 'react';
import {Text,StyleSheet,TextInput,View,TouchableOpacity} from "react-native";

class login extends Component{

    render(){
        return (
            <View style={styles.mainView}>
                <Text style={styles.loginLabel}>Login</Text>
                <View style={styles.FormView}>
                <Text style={styles.formsLabel}>Username: </Text>
            <TextInput style={styles.forms}/>
                <Text style={styles.formsLabel} >Password: </Text>
            <TextInput style={styles.forms}/>
                    <TouchableOpacity ><Text style={styles.submitBtn}>Submit</Text></TouchableOpacity>

                </View>
            </View>
        )
            }

}

const styles = StyleSheet.create({

forms: {
    height: 30,
    width: 300,
    backgroundColor: "orange",
    marginTop: 15,
    borderRadius: 5

},
    mainView:{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.9)",

    },
    formsLabel: {
        fontFamily: "times",
        fontSize: 20,
        color: "white",
        marginTop: 20,

    },
    FormView: {
    marginTop: 150,
        alignItems: "center"
    },
    loginLabel: {
    fontSize: 40,
        color: "white",
        alignSelf: "center",
        marginTop: 70,
        fontFamily: "times"
    },
    submitBtn:{
    marginTop: 60,
    color: "white",
        backgroundColor: "lightblue",
        width: 100,
        height: 30,

    }


})

export default login;