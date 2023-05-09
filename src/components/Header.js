import React, { Component } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
Modal } from 'react-native';

const Header = () =>{
    return (
   <SafeAreaView style={style.header}>
       
        <Text style={style.texto}>Planificador de gastos</Text>
      
    </SafeAreaView>
    );
  }

  const style= StyleSheet.create({
    header:{
       backgroundColor:'#3b82f6',

    },
    texto:{
textAlign:'center',
fontSize:30,
color:'#fff',
textTransform:'uppercase',
fontWeight:'bold',
paddingTop:20
    }
  })
export default Header;