import React,{Component} from 'react';
import { Text, Image, View, StyleSheet, ScrollView,TouchableOpacity, TextInput, AsyncStorage} from 'react-native';

export default class ViewEmployees extends Component
{
state = {fname:'',lname:''}
handlefn = (text)=>this.setState({fname:text});
handleln = (text)=>this.setState({lname:text});
update = async(id,fn,ln)=>{
try
{
if(fn != ''){
await AsyncStorage.mergeItem(id,JSON.stringify({firstname:fn}));
}
if(ln != ''){
await AsyncStorage.mergeItem(id,JSON.stringify({lastname:ln}));
}
alert("Update success");
}
catch(e)
{
alert(e);
}
}
deleteEntry = async(id)=> {
await AsyncStorage.removeItem(id);
alert("Entry Sucessfully Deleted");
}
render()
{
const items = this.props.route.params.data;
const keys = this.props.route.params.kys;
return(
<View>
            <ScrollView>
               {
                  items.map((item, index) => (
					  <View>
					  <View><Text>{keys[index]}</Text></View>
					  <View key = {item.id} style = {styles.item}>
					    <TextInput onChangeText = {this.handlefn}>{item.firstname}</TextInput>
					    <TextInput onChangeText = {this.handleln}>{item.lastname}</TextInput>
						</View>
					 <View style = {styles.mattressinfo}>
					 <TouchableOpacity
               style = {styles.submitButton} onPress={()=>this.update(keys[index],this.state.fname,this.state.lname)}>
               <Text style = {styles.submitButtonText}>Update</Text>
            </TouchableOpacity>
			 <TouchableOpacity
               style = {styles.submitButton} onPress = {()=>this.deleteEntry(keys[index])}>
               <Text style = {styles.submitButtonText}>Delete</Text>
            </TouchableOpacity>
			</View>
					 </View>
                  ))
               }
            </ScrollView>
         </View>
)
}

}

const styles = StyleSheet.create(
{
item:
{
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 30,
margin: 2,
borderColor: '#2a4944',
borderWidth: 1,
backgroundColor: '#d2f7f1'},
submitButton:{ backgroundColor: '#008080',
      padding: 10,
      margin: 0,
      height: 40},
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
}
)
