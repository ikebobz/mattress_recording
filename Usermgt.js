import React, { Component } from 'react';
import { Platform,View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, AsyncStorage, ScrollView } from 'react-native';

Class Usermgt extends Component
{
state = {firstname:'',lastname:''}
handlefn = (text)=>this.setState{firstname:text}
handleln = (text)=>this.setState{lastname:text}
save = async()=>{
try
{
await AsyncStorage.setItem(this.getInstance(),JSON.stringify(this.state));
alert("Success saving");
}
catch(error)
{
}
}
getInstance = () => {
var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var instance = 'ruc_'+date + '.' + month + '.' + year;
    return instance;
}
}
