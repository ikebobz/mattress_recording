import React, { Component } from 'react';
import { Platform,View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, AsyncStorage, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import AutoComplete from 'react-native-autocomplete-input';

class Inputs extends Component
{
state = {len:'',wide:'',thick:'',type:'',id:'',Qty:0,date:'',srchId:'',isDisabled:false}
handleDim = (text,uid) => { 
if(uid == 0)
this.setState({len:text});
else if(uid == 1)
 this.setState({wide:text});
else
 this.setState({thick:text});
}
handleCode = (text) => this.setState({type:text})
handleQty = (units) => this.setState({Qty:units})
_savedata = async() =>{
try
{
await AsyncStorage.setItem(this.getInstance(),JSON.stringify(this.state));
alert("Success saving");
}
catch(error)
{
}
}
_getForDate = async(id,date)=>{
try{
//await AsyncStorage.removeItem("rmc-1.9.2020_6:3:7");
const keys = await AsyncStorage.getAllKeys();
const dates = keys.map(key=>key.split("_")[1]);
const result = await AsyncStorage.multiGet(keys);
const record = result.map(req => JSON.parse(req[1]));
let hits = [];let getKeys = []
let count = 0;
for(let i=0;i<keys.length;i++)
{
if(date === dates[i] && id === record[i].id)
{
hits.push(record[i]);
getKeys.push(keys[i])
}
}
//alert(hits[0]);
this.props.navigation.navigate("Reporting",{data:hits,kys:getKeys});
}
catch(e)
{
alert(e);
}
}
clearAll = ()=>{
this.txtlen.clear();
this.txtwidth.clear();
this.txtheight.clear();
this.txttype.clear();
this.txtid.clear();
this.txtQty.clear();
this.txtsrch.clear();
this.setState({date:''});
}
handleId = (text) => this.setState({id:text})
handletxid = (text) => this.setState({srchid:text})
getInstance = () => {
var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
	var instance = 'rmc_'+date + '.' + month + '.' + year + '_' + hours + ':' + min + ':' + sec;
    return instance;
}
submit = (dim,type,id) => {if(type == ''||id == ''||this.state.len == ''||this.state.wide == ''||this.state.thick == ''||this.state.Qty == 0){alert("Missing Field(s)");return};
this._savedata();
//alert(dim+type+' successfully recorded for '+id);
//alert(this.getInstance());
this.clearAll()
}
render()
{
return(
         <View style = {styles.container}>
		 <ScrollView>
		    <Text style = {styles.header}>Record Center</Text>
			<Text style = {styles.sectionHeader}>Mattress Dimension</Text>
			<View style = {styles.mattressinfo}>
            <TextInput style = {styles.input}
            ref = {input=>{this.txtlen = input}}
               underlineColorAndroid = "transparent"
               placeholder = "Length"
               placeholderTextColor = "#8fbc8f"
               autoCapitalize = "none"
               onChangeText = {(text)=>this.handleDim(text,0)}
			   keyboardType={'numeric'} value = {this.state.len}/>
            
            <TextInput style = {styles.input}
			ref = {input=>{this.txtwidth = input}}
               underlineColorAndroid = "transparent"
               placeholder = "Breadth"
               placeholderTextColor = "#8fbc8f"
               autoCapitalize = "none"
			   onChangeText = {(text)=>this.handleDim(text,1)}
			   keyboardType={'numeric'} value = {this.state.wide}/>
			   
			  <TextInput style = {styles.input}
			  ref = {input=>{this.txtheight = input}}
               underlineColorAndroid = "transparent"
               placeholder = "Thickness"
               placeholderTextColor = "#8fbc8f"
               autoCapitalize = "none"
			   onChangeText = {(text)=>this.handleDim(text,2)}
			   keyboardType={'numeric'} value = {this.state.thick}/>
			 </View>
			 <Text style = {styles.sectionHeader}>Production Identifier</Text>
			 <View style = {styles.mattressinfo}>
			 <TextInput style = {styles.input}
			 ref = {input=>{this.txttype = input}}
               underlineColorAndroid = "transparent"
               placeholder = "Type"
               placeholderTextColor = "#8fbc8f"
               autoCapitalize = "characters"
			   onChangeText = {this.handleCode} value = {this.state.type}/>
            </View>
			<Text style = {styles.sectionHeader}>Handler Identification Details</Text>
			 <View style = {styles.mattressinfo}>
			 <TextInput style = {styles.inputLong}
			 ref = {input=>{this.txtid = input}}
               underlineColorAndroid = "transparent"
               placeholder = "Operator Id"
               placeholderTextColor = "#8fbc8f"
               autoCapitalize = "characters"
			   onChangeText = {this.handleId} value = {this.state.id}/>
            </View>
			<View style = {styles.mattressinfo}>
			 <TextInput style = {styles.input}
			 ref = {input=>{this.txtQty = input}}
               underlineColorAndroid = "transparent"
               placeholder = "Quantity"
               placeholderTextColor = "#8fbc8f"
               autoCapitalize = "characters"
			   keyboardType={'numeric'}
			   onChangeText = {this.handleQty} value = {this.state.Qty}/>
            </View>
			<View style = {styles.mattressinfo}>
            <TouchableOpacity
               style = {styles.submitButton}
             disabled = {this.state.isDisabled}
               onPress = {()=>this.submit(this.state.len+"X"+this.state.wide+"X"+this.state.thick, this.state.type,this.state.id)}>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
			<TouchableOpacity
               style = {styles.submitButton} onPress = {()=>{this.clearAll();this.setState({isDisabled:false})}}>
               <Text style = {styles.submitButtonText}> Reset</Text>
            </TouchableOpacity>
			</View>
			<Text style = {styles.sectionHeader}>Search transaction</Text>
			 <View style = {styles.mattressinfo}>
			 <TextInput style = {styles.inputLong}
			 ref = {input=>{this.txtsrch = input}}
               underlineColorAndroid = "transparent"
               placeholder = "Operator Id"
               placeholderTextColor = "#8fbc8f"
               autoCapitalize = "characters"
			   onChangeText = {this.handletxid} value = {this.state.srchid}/>
            </View>
			<View>
			<DatePicker
			ref = {input=>{this.datepicker = input}}
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="Select Transaction Date"
        format="D.M.YYYY"
        minDate="01.01.2020"
        maxDate="31.12.2030"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
			</View>
			<View style = {styles.mattressinfo}>
			<TouchableOpacity
               style = {styles.submitButton} onPress = {()=>{this._getForDate(this.state.srchid,this.state.date);this.setState({isDisabled:true})}}>
               <Text style = {styles.submitButtonText}> Retrieve </Text>
            </TouchableOpacity>
			<TouchableOpacity
               style = {styles.submitButton} onPress = {()=>this.setState({isDisabled:false})}>
               <Text style = {styles.submitButtonText}> Update</Text>
            </TouchableOpacity>
			<TouchableOpacity
               style = {styles.submitButton}>
               <Text style = {styles.submitButtonText}> Purge</Text>
            </TouchableOpacity>
			</View>
			</ScrollView>
         </View>

)
}
}
export default Inputs
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