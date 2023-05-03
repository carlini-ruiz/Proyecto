import React, { Component } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

export default class Bajas extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dCodigos:"",
        codigobaja:""
    };
  }
  componentDidMount() {
    
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {        
        var temp = JSON.parse(xhttp.responseText);
        _this.setState({dCodigos:temp});
      }
    };
    xhttp.open('GET', 'https://prograinter-proyecto.000webhostapp.com/codigos.php', true);
    xhttp.send();
  }

  render() {
    return (        
      <View>
        <Text style={{textAlign:"center",fontSize: 25, color: "black", fontWeight: 'bold'}}> Seleccione el codigo a dar baja </Text>
        <View style={styles.codigoss}>
        <SelectDropdown
            data={this.state.dCodigos}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                this.setState({codigobaja:selectedItem});
                Alert.alert(
                  'Verifique el codigo a eliminar','Al darlo de baja no hay vuelta atras', [{text: 'Entendido', onPress: () => console.log('ok'), style: 'cancel', }]);
                //tarea
                
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
        />
        </View>
    <View style={styles.botons}>
    <Button title='Eliminar' onPress={()=>{
        const _this = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                if(xhttp.responseText === "1"){
                    console.log("Exito");
                    Alert.alert(
                        'Baja Confirmada','Se elimino el registro de la base de datos', [{text: 'OK', onPress: () => console.log('ok'), style: 'cancel', }]);
                }else{
                    Alert.alert(
                        'Fallo al dar de baja','Intente de nuevo', [{text: 'OK', onPress: () => console.log('ok'), style: 'cancel', }]);
                }
                }
                };
                xhttp.open("GET", "https://prograinter-proyecto.000webhostapp.com/bajas.php?codigo="+this.state.codigobaja, true);
                xhttp.send();
    }}/>
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
  codigoss:{
    marginLeft: 98,
    marginTop: 20,
    width: 200,
    borderWidth: 1,
    width: 208
},

})