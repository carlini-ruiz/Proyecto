
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput, Button, Alert } from 'react-native'
export default class PantallaA extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <View /* style={styles.fondo} */>
        <Text style={{fontSize: 20, textAlign:"center", color: "black", fontWeight: 'bold'}}>
          Bienvenido          
        </Text>
        <Text style={{fontSize: 20, textAlign:"center", color: "black"}}>
        {this.props.route.params.nombre}{'  '}
          {this.props.route.params.codigo} 
        </Text>
        <Text >Que desea realizar</Text>
        <View >
        <Button title='Alta' onPress={()=>{this.props.navigation.navigate("Altas")}}></Button>
        </View>
        <View>
        <Button title='Baja' onPress={()=>{this.props.navigation.navigate("Bajas")}}></Button>
        </View>
        <Button title='Listas' onPress={() =>{this.props.navigation.navigate("Pantallab", {nombre:this.props.route.params.nombre})}}> </Button>
      </View>
    )
  }
}
