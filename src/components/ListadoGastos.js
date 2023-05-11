import React, { Component } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
Modal } from 'react-native';
import Gasto from './Gasto';


const ListadoGastos = ({gastos}) =>{






    return (
     
      <View style={style.contenedor}>
        <Text style={style.titulo}>Gastos</Text>
        {gastos.length === 0 ? 
        <Text style={style.noGastos}>No hay gastos</Text> : 
        gastos.map (gasto => {
           return(
            <Gasto 
           key={gasto.id}
           gasto={gasto}/>
           )
        })}
      </View>
     
    );
  }

  const style=StyleSheet.create({
   contenedor:{
    marginTop:70,
    marginBottom:100
   },
   titulo:{
    color:"#64748b",
    textAlign:'center',
    fontWeight:'700',
    fontSize:30,
    marginTop:20
   },
   noGastos:{
    marginTop:20,
    textAlign:'center',
    fontSize:20,
    marginVertical:20

   }
  })
export default ListadoGastos;