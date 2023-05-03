//Importacion de los objetos
import { Text, View, StyleSheet, Image, TextInput, Button, Alert } from 'react-native'
import React, { Component } from 'react'

export default class Inicio extends Component {    
    constructor (props){
    super(props);
    this.state={
    //aqui se declaran las variables
        Codigo:"",
        Nip:"",
        res:"",                
                }
    }
//declaracion de variables
  render() {
    
    //programacion js
    const btnsuma = () =>{
      //const _this = this;
      let _this=this;
      //programacion siguiente ventana       
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {        
        if (this.readyState == 4 && this.status == 200) {            
             console.log(xhttp.responseText);
             let cadena = xhttp.responseText;
             const datos = cadena.split(",");
            /*
            //CLASE 12 SEP 2022
            let cadena = xhttp.responseText;
            const datos = cadena.split(",");
            console.log(datos[2]); //nombre
            if(xhttp.responseText == '0')
            {
              //error
            }else{
              _this.props.navigation.navigate("Pantallab",{nombre:datos[2], 
                codigo:datos[1]});
            }
            */
             /*tarea 5 sep 2022*/
            const usuario = xhttp.responseText.split(',');
             if(usuario[0] == 'A' || usuario[0] == 'T')
             {
              _this.props.navigation.navigate("PantallaA",{nombre:datos[2], 
                codigo:datos[1]});              
             } 
             if(usuario[0] == '0')
             {
              Alert.alert(
                'Usuario Incorrecto','Codigo o Nip ingresados incorrectamente', [{text: 'OK', onPress: () => console.log('ok'), style: 'cancel', }]);
             }
            }          
      };
      xhttp.open("GET", "http://148.202.152.33/ws_claseaut.php?codigo="+this.state.Codigo+"&nip="+this.state.Nip, true);
      //console.log("http://148.202.152.33/ws_claseaut.php?codigo="+this.state.Codigo+"&nip="+this.state.Nip);
      xhttp.send();
    }
    return (
      <View>
        <Text style = {styles.encabezado}>U de G</Text>
        
        <Image style={styles.imagen1} source={{uri:"https://www.dwgautocad.com/uploads/8/3/4/5/8345765/logo-udg-png-blanco-y-negro_orig.png"}}/>
        
        <Text style={{textAlign:"center", fontSize:20,}}>{this.state.res}</Text>        
        
        <TextInput style={styles.inputs}
        placeholder="Codigo"
        onChangeText={Codigo => this.setState({Codigo})}/>
        
        <TextInput style={styles.inputs}
        placeholder="Nip"
        secureTextEntry={true}
        onChangeText={Nip => this.setState({Nip})}/>
        
        <View style={styles.btn}>
        <Button title='Entrar' onPress={btnsuma}></Button>
        </View>
      </View>

    )
  }
}
const styles = StyleSheet.create({
encabezado:{
fontSize:40,
textAlign:"center",
color: "orange",
},

imagen1:{
width:200,
height:200,   
marginLeft:110,
marginTop: 10,
resizeMode: "center",
},

imagen2:{
width:150,
height:200,
marginLeft:140,
marginTop: 20,

},

inputs:{
width:250,
marginLeft:70,
borderWidth:1,
marginTop: 30,
fontSize: 30
},

btn:{
marginTop:30,
color:"red",
width:100,
height:80,
marginLeft:150,
},
})