import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Homeui = (props) =>
{
return(
<View>
<Text style = {styles.text}>
{props.title}
</Text>
<Text style = {styles.text2}>
{props.message}
</Text>
</View>
)
}

export default Homeui;

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize:20
  },
text2:
  {
    marginTop: 10,
    color: 'purple',
    textAlign: 'left',
    fontWeight:'normal',
    fontSize:15
  }
});
