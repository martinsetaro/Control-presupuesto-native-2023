import React, { Component } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
Modal } from 'react-native';
import globalStyle from '../styles';
import { formatearCantidad } from '../helpers';

const ControlPresupuesto = ({presupuesto}) =>{





    return (
     
      <View style={style.contenedor}>
        <View style={style.centrarGrafica}>
            <Image 
            style={style.imagen}
            source={require('../img/grafico.jpg')} />
        </View>
        <View>
            <Text>
                <Text>Presupuesto:</Text>
                {formatearCantidad(presupuesto)}
            </Text>
            <Text>
                <Text>Disponible:</Text>
                {formatearCantidad(presupuesto)}
            </Text>
            <Text>
                <Text>Gastado:</Text>
                {formatearCantidad(presupuesto)}
            </Text>
        </View>
      </View>
     
    );
  }

  const style = StyleSheet.create({
  contenedor:{
    ...globalStyle.contenedor
  },
  centrarGrafica:{
   
    alignItems:'center'
  },
  imagen:{
    width:250,
height:250  
}
  })
export default ControlPresupuesto;