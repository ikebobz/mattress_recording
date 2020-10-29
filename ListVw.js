import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

class ListVw extends Component
{
render(){return(
 <View>
            
                  <TouchableOpacity
                     style = {styles.topParent} onPress = {()=>this.props.navigation.navigate('Operator Infomgt')}>
                     <Text style = {styles.text}>
                       Operator Information Management 
                     </Text>
                  </TouchableOpacity>
				  <TouchableOpacity
                    style = {styles.topParent} onPress = {()=>this.props.navigation.navigate('Recording Centre')}>
                     <Text style = {styles.text}>
                      Record Management
                     </Text>
                  </TouchableOpacity>
				  <TouchableOpacity
                     style = {styles.topParent}>
                     <Text style = {styles.text}>
                     Store Management   
                     </Text>
                  </TouchableOpacity>
             
         </View>
)}
}
export default ListVw;

const styles = StyleSheet.create ({
   topParent: {
      padding: 10,
      marginTop: 10,
      backgroundColor: '#008080',
      alignItems: 'center',
   },
   text: {
      color: 'white'
   }
})
