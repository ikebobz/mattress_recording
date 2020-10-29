import React, { Component } from 'react';
import { Platform,View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, AsyncStorage, ScrollView } from 'react-native';

class Operatormgt extends Component
{
state = {firstname:'',lastname:''}
handlefn = (text)=>this.setState({firstname:text});
handleln = (text)=>this.setState({lastname:text});
submit = ()=> {
if(this.state.firstname == '' || this.state.lastname == '')
{
alert("one or more field(s) missing");
return;
}
this.save();
}
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
	var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds();
    var instance = 'ruc_'+date + '.' + month + '.' + year +'_'+ hours + ':' + min + ':' + sec;;
    return instance;
}
clearAll = ()=>{
this.txtln.clear();
this.txtfn.clear();
}
_getOperators = async()=>{
try{
//await AsyncStorage.removeItem("rmc-1.9.2020_6:3:7");
const keys = await AsyncStorage.getAllKeys();
const result = await AsyncStorage.multiGet(keys);
const record = result.map(req => JSON.parse(req[1]));
let hits = [];let getKeys = []
let count = 0;
for(let i=0;i<keys.length;i++)
{
if(keys[i].includes("ruc")){
hits.push(record[i]);
getKeys.push(keys[i])
}
}
//alert(hits[0]);
this.props.navigation.navigate("ViewEmployees",{data:hits,kys:getKeys});
}
catch(e)
{
alert(e);
}
}
render(){
return(
<View style = {styles.container}>
<ScrollView>
<Text style = {styles.header}>Operator Management Center</Text>
<Text style = {styles.sectionHeader}>Enter Operator Details</Text>
<View style = {styles.mattressinfo}>
<TextInput style = {styles.inputLong}
ref = {input=>{this.txtfn = input}}
underlineColorAndroid = "transparent"
placeholder = "FIRST NAME"
placeholderTextColor = "#8fbc8f"
autoCapitalize = "characters"
onChangeText = {this.handlefn} value = {this.state.firstname}/>
 </View>
 <View style = {styles.mattressinfo}>
<TextInput style = {styles.inputLong}
ref = {input=>{this.txtln = input}}
underlineColorAndroid = "transparent"
placeholder = "LAST NAME"
placeholderTextColor = "#8fbc8f"
autoCapitalize = "characters"
onChangeText = {this.handleln} value = {this.state.lastname}/>
 </View>
 <View style = {styles.mattressinfo}>
 <TouchableOpacity
    style = {styles.submitButton}
    onPress = {()=>this.submit()}>
    <Text style = {styles.submitButtonText}>Submit</Text>
  </TouchableOpacity>
 <TouchableOpacity
   style = {styles.submitButton} onPress = {()=>{this.clearAll();}}>
   <Text style = {styles.submitButtonText}> Reset</Text>
  </TouchableOpacity>
  </View>
  <TouchableOpacity
   style = {styles.submitButton} onPress = {()=>this._getOperators()}>
   <Text style = {styles.submitButtonText}> Retrieve All Operators</Text>
  </TouchableOpacity>
  </ScrollView>
</View>
)
}
}
export default Operatormgt;
const styles = StyleSheet.create({
containers:{marginTop:23},
header:{color:'#008080',
marginTop:20,
marginBottom:20,
textAlign:'center',
fontWeight:'bold',
fontSize:30
},
sectionHeader:{
color:'#008080',
fontSize:16,
marginLeft:25
},
input:{margin: 15,
      marginTop:5,
      height: 40,
      width:80,  
      paddingLeft:10,
      borderColor: '#008080',
      borderWidth: 1
  },
 inputLong:{margin: 15,
      marginTop:5,
      height: 40,
      width:300,  
      paddingLeft:10,
      borderColor: '#008080',
      borderWidth: 1
  },
  submitButton:{ backgroundColor: '#008080',
      padding: 10,
      margin: 15,
      marginTop:5,
      marginBottom:35,
      height: 40,},
submitButtonText:{
color:'white'
},
mattressinfo:
{
flexDirection: 'row',
justifyContent: 'space-between',
padding: 10,
margin: 2
}
})
