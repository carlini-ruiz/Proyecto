import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      users: [],
    };
  }
  componentDidMount() {
    
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        //_this.setState({users: xhttp.responseText});
        var myArr = JSON.parse(this.responseText);
        _this.setState({users: myArr});
      }
    };
    xhttp.open('GET', 'https://carlossalvador.000webhostapp.com/mostrarDatos.php', true);
    xhttp.send();
  }

  render() {        
    const _this = this;
    const getItem = (id, nombre1,codigo1,imagen1)=>{
      console.log(id);
      _this.props.navigation.navigate("Id",{nombre:nombre1,codigo:codigo1,imagen:imagen1})
    }    
    const renderUser = ({item}) => {
      return (        
        <View style={{margin: 5, borderWidth: 1, padding: 10}}>
          <TouchableOpacity onPress={()=>{ getItem(item.id, item.Nombre, item.Codigo, item.Imagen)}}>           
          <Text style={{color: 'red', fontSize: 14, fontWeight: 'bold'}}>  
                    Miembro {item.id}            </Text>
          <Text style={{color: 'black'}}>Nombre : {item.Nombre}</Text>
          <Text style={{color: 'black'}}>Codigo : {item.Codigo}</Text>
          <Text style={{color: 'black'}}>Tarea : {item.Tarea}</Text>
          <Text style={{color: 'black'}}>Imagen : {item.Imagen}</Text>
                        
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View>
        <Text style={{fontSize: 20}}>
          Bienvenido:{this.props.route.params.nombre},codigo:{' '}
          {this.props.route.params.codigo}
        </Text>
        <FlatList
          data={this.state.users}
          renderItem={renderUser}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}