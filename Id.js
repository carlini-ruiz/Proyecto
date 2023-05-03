import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default class Id extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View /* style={{backgroundColor: "#F6E5D5"}} */>
        <Text style={{fontSize: 25, textAlign: "center", color: "black", marginTop:80, fontWeight: 'bold', width:200, borderWidth:3, marginLeft:110, borderRadius:20}}>
         {this.props.route.params.nombre}   
        </Text>
        <Text style={{fontSize: 18, textAlign: "center", color: "black"}}>
         CODIGO: {this.props.route.params.codigo}   
        </Text>
        <Image style={styles.imagen1} source={{uri: this.props.route.params.imagen}}/>
        <View style={styles.botons}>
        <Button title='Regresar' onPress={()=>{this.props.navigation.navigate("Pantallab",{nombre:this.props.route.params.nombre})}} />
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
    imagen1:{
    width:200,
    height:200,   
    marginLeft:110,
    marginTop: 80,
    resizeMode: "center",
    borderColor: "blue",
    borderWidth: 3,
    borderRadius: 20,
    },

    botons:{
      marginLeft: 100,
      marginTop: 250,
      width: 200,
  },
})