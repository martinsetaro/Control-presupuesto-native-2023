import React, { useState , useEffect } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
TextInput,
Modal } from 'react-native';
import globalStyle from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NuevoPresupuesto = ({presupuesto,setPresupuesto,handlerNuevoPresupuesto}) =>{


useEffect(()=>{

const  obtenerAS = async ()=>{
 try {
  const valor = await AsyncStorage.getItem('prueba_as')

 }catch (error) {
  console.log(error)
 }
  
}
obtenerAS()

},[])



    
    return (
     
      <View style={style.contenedor}>
        <Text style={style.label}>Definir presupuesto</Text>
        <TextInput
        keyboardType='numeric'
        placeholder='Agrega tu presupuesto Ej:300'
        style={style.input}
        value={presupuesto.toString()}
        onChangeText={setPresupuesto}

        />
        <Pressable 
        onPress={()=> handlerNuevoPresupuesto(presupuesto)}
        style={style.btn}
        >
            <Text style={style.textoBtn}>Agregar Presupuesto</Text>
        </Pressable>
      </View>
     
    );
  }

  const style= StyleSheet.create({
      contenedor:{
         ...globalStyle.contenedor
      },
      btn:{
       marginTop:30,
       backgroundColor:'#1048a4',
       padding:10,
       borderRadius:10
      },
      textoBtn:{
         color:'#fff',
         textAlign:'center',
         textTransform:'uppercase',
         fontWeight:'bold'
      },
      input:{
       backgroundColor:'#f5f5f5',
       padding:10,
       borderRadius:10,
       textAlign:'center',
       marginTop:30


      },
      label:{
        textAlign:'center',
        fontSize:24,
        color:'#3b82f6',
        marginBottom:10
      }
  })
export default NuevoPresupuesto;