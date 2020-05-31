import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput,TouchableOpacity , Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
const currencyPerRupee={
  DOLLAR: 0.014,
  EURO:0.012,
  POUND:0.011,
  RUBEL:0.93,
  AUSDOLLAR:0.2,
  CANDDOLLAR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.00000041

}
export default class App extends React.Component {

constructor(props){
  super(props);
  this.state={
    inputValue:'',
    resultValue:'0.0'
  };
}
buttonPressed=(currency)=>{
  if(this.state.inputValue=== ''){
    Alert.alert('Enter Some Value');
  }
  let result= parseFloat(this.state.inputValue) * currencyPerRupee[currency];
  this.setState({resultValue:result.toFixed(2)});
  

}

  render() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <SafeAreaView style={styles.container}>
      <View style={styles.screenview}>
        <View style={styles.resultcontainer}>
          <Text style={styles.resultValue}>
            {this.state.resultValue}
          </Text>

        </View>
        <View style={styles.inputcontainer}>
          <TextInput
           style={styles.input}
           selectionColor='#ffffff'
           keyboardType='numeric'
           placeholder='Enter Value'
           value={this.state.inputValue}
           onChangeText={inputValue => this.setState ({
             inputValue
           })
          }

          />
        </View >
        <View style={styles.converterbutton}>
          <TouchableOpacity
          onPress= { ()=> this.buttonPressed('DOLLAR')}
          style={styles.converter}>
            <Text style={styles.converterbuttontext}> $ </Text>

          </TouchableOpacity>
          <TouchableOpacity
          onPress= { ()=> this.buttonPressed('EURO')}
          style={styles.converter}>
            <Text style={styles.converterbuttontext}> euro </Text>

          </TouchableOpacity>
          <TouchableOpacity
          onPress= { ()=> this.buttonPressed('POUND')}
          style={styles.converter}>
            <Text style={styles.converterbuttontext}> pound </Text>

          </TouchableOpacity>
          <TouchableOpacity
          onPress= { ()=> this.buttonPressed('AUSDOLLAR')}
          style={styles.converter}>
            <Text style={styles.converterbuttontext}> aus dollar </Text>

          </TouchableOpacity>
          <TouchableOpacity
          onPress= { ()=> this.buttonPressed('CANDDOLLAR')}
          style={styles.converter}>
            <Text style={styles.converterbuttontext}> canada </Text>

          </TouchableOpacity>
          <TouchableOpacity
          onPress= { ()=> this.buttonPressed('YEN')}
          style={styles.converter}>
            <Text style={styles.converterbuttontext}> yen  </Text>

          </TouchableOpacity>
          <TouchableOpacity
          onPress= { ()=> this.buttonPressed('DINAR')}
          style={styles.converter}>
            <Text style={styles.converterbuttontext}> dinar </Text> 

          </TouchableOpacity>
          <TouchableOpacity
          onPress= { ()=> this.buttonPressed('BITCOIN')}
          style={styles.converter}>
            <Text style={styles.converterbuttontext}> bitcoin </Text>

          </TouchableOpacity>
          
          <TouchableOpacity
          onPress= { ()=> this.buttonPressed('RUBEL')}
          style={styles.converter}>
            <Text style={styles.converterbuttontext}> rubel </Text>

          </TouchableOpacity>




        </View>
         

      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2B52',
    
   
  },
  screenview: { 
    flex:1,

  },
  resultcontainer:{
    height:70,
    marginTop:80,
    justifyContent:"center",
    borderColor:'#c1c1c1',
    backgroundColor:'#25CCF7',
    alignItems:'center',
    borderWidth:2,
  },
  resultValue:{
    fontSize:30,
    fontWeight:'bold',
    color:'#ffffff'
  },
  inputcontainer:{
    height:70,
    marginTop:10,
    justifyContent:'center',
    alignItems: 'center',
    borderColor:'#c1c1c1',
    borderWidth:2,
    backgroundColor:'#25CCF7'

  },
  input: {
    color:'#ffffff',
    fontSize:30,

  },
  converterbutton:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20,
    borderColor:'#c1c1c1',
    borderWidth: 2

  },
  converter:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#0A79DF',
    height:100,
    borderColor:'#c1c1c1',
    borderWidth:2,
    width:'33.3%'
  },
  converterbuttontext:{
    fontSize:20,
    fontWeight:'bold'

  }

});
