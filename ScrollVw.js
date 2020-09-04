import React,{Component} from 'react';
import { Text, Image, View, StyleSheet, ScrollView,TouchableOpacity, TextInput, AsyncStorage} from 'react-native';

export default class ScrollVw extends Component
{
state = {quantity:0}
handleqty = (unit)=>this.setState({quantity:unit});
update = async(id,qty)=>{
try
{
await AsyncStorage.mergeItem(id,JSON.stringify({Qty:qty}));
alert("Update success");
}
catch(e)
{
alert(e);
}
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
					    <Text>{item.id}</Text>
					    <Text>{item.len+' X '+item.wide+' X '+item.thick+' '+item.type}</Text>
						<TextInput keyboardType={'numeric'} onChangeText = {this.handleqty}>{item.Qty}</TextInput>
					 </View>
					 <View style = {styles.mattressinfo}>
					 <TouchableOpacity
               style = {styles.submitButton} onPress={()=>this.update(keys[index],this.state.quantity)}>
               <Text style = {styles.submitButtonText}>Update</Text>
            </TouchableOpacity>
			 <TouchableOpacity
               style = {styles.submitButton}>
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