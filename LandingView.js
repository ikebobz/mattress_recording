import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';



class LandingView extends Component
{
  constructor(props)
{
super(props)
this.state = {subject:'Interesting features',body:'We will be treating functional concepts for the next three weeks'}
}
update = () => this.setState({body:'Exciting highlights'})
 render()
{
return(
<View>
<Text style = {styles.text2} onPress = {this.update}>{this.state.body}</Text>
</View>
)
}
}

export default LandingView

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