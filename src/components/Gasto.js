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

const Gasto = ({gasto}) =>{

const {nombre,cantidad,categoria,id} = gasto



    return (
    
      <View style={style.contenedor}>
        <Text>{nombre}</Text>
      </View>
    
    );
  }

  const style=StyleSheet.create({

 contenedor:{
...globalStyle.contenedor,
marginBottom:10
 }


  })
export default Gasto;