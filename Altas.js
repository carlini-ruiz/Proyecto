import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, Alert } from 'react-native'

export default class Altas extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Nombre:"",
        Codigo:"",
        Tarea:"",
        Urli:"",
    };
  }

  render() {
    const Alta = ()=>{
      const _this = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        if(xhttp.responseText === "1"){
            console.log("Exito");
            Alert.alert(
                'Guardado Exitoso',' ', [{text: 'OK', onPress: () => console.log('ok'), style: 'cancel', }]);
                 //_this.props.navigation.navigate("PantallaA",{nombre:this.props.route.params.nombre, codigo:this.props.route.params.codigo});
        }else{
            Alert.alert(
                'Fallo en guardar','Intente de nuevo', [{text: 'OK', onPress: () => console.log('ok'), style: 'cancel', }]);
        }
        }
        };
        xhttp.open("GET", "https://carlossalvador.000webhostapp.com/Altas.php?nombre="+this.state.Nombre+"&codigo="+this.state.Codigo+"&tarea="+this.state.Tarea+"&urlimagen="+this.state.Urli, true);
        xhttp.send();
    }
    return (
      <View>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Nombre:</Text>
        <TextInput style={{margin: 10, borderWidth: 2, padding: 10}} 
        onChangeText={Nombre => this.setState({Nombre})}
        />
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Codigo:</Text>
        <TextInput   style={{margin: 10, borderWidth: 2, padding: 10}}       
        onChangeText={Codigo => this.setState({Codigo})}
        />
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Tarea:</Text>
        <TextInput style={{margin: 10, borderWidth: 2, padding: 10}}        
        onChangeText={Tarea => this.setState({Tarea})}
        />
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Imagen:</Text>
        <TextInput style={{margin: 10, borderWidth: 2, padding: 10}}
        onChangeText={Urli => this.setState({Urli})}
        />
        <View style={styles.botons}>
        <Button title='Guardar' onPress={Alta}/>
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  botons:{
      marginLeft: 100,
      marginTop: 20,
      width: 200,
  },

})