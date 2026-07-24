import {View, Text, StyleSheet , TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {TextInput} from 'react-native-paper';

export default App(){
  return(
    <SafeAreaView style ={styles.container}>
     <View style={styles.inputcontainer}>
       <TextInput
       placeholder = "what would you like focus....."
       mode = {"outlined"}
       label = "Focus"
       style = {styles.inputtext}
       />
       <TouchableOpacity style={styles.fabButton}>
       <Text style ={styles.fabText}>+</Text>
       </TouchableOpacity>
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor :'#090437',
  },
  Text: {
    marginTOP: 50,
  },
  inputcontainer :{
    flexdirection:'row',
    padding : 20
  },
  inputtext:{
    flex:1
  },
  fabButton :{
    height:60,
    width:60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',
    borderWidth: 2,
    borderColor: '#fff',
    marginLeft: 10,
  },
  fabText: {
    fontSize: 20,
    color: '#fff'
  }
})