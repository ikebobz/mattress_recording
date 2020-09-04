import React,{Component} from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

export default class ScrollVw extends Component
{
render()
{
const items = this.props.route.params.data;
return(
<View>
            <ScrollView>
               {
                  items.map((item, index) => (
                     <View key = {item.name} style = {styles.item}>
                        <Text>{item.len}</Text>
						<Text>{item.wide}</Text>
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
backgroundColor: '#d2f7f1'}
}
)