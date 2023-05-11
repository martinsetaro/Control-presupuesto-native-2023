import React, { useState } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
TextInput,
Image,
Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import globalStyle from '../styles';

const FormularioGasto = ({setModal,handlerGasto}) =>{

    const [nombre,setNombre] = useState('')
    const [cantidad,setCantidad] = useState('')
    const [categoria,setCategoria] = useState('')










    return (
     <SafeAreaView style={style.contenedor}>
        <View>
            <Pressable
            onLongPress={() => setModal(false)}
            style={style.btnCancelar}
            >
                <Text style={style.btnCancelarTexto}>Cancelar</Text>
            </Pressable>
        </View>

        <View style={style.formulario}>
            <Text style={style.titulo}>Nuevo Gasto</Text>
        
        <View style={style.campo}>
            <Text style={style.label}>Nombre gasto</Text>
            <TextInput
            value={nombre}
            onChangeText={setNombre}
            style={style.input} 
            placeholder='Nombre gasto ej: comida'
            />
        </View>
        <View style={style.campo}>
            <Text style={style.label}>Cantidad gasto</Text>
            <TextInput 
            value={cantidad}
            onChangeText={setCantidad}
            style={style.input}
            placeholder='Cantidad gasto ej: $300'
            keyboardType='numeric'
            />
        </View>
        <View style={style.campo}>
            <Text style={style.label}>Categoria gastos</Text>
            <Picker
            selectedValue={categoria}
            onValueChange={(itemValue)=> setCategoria(itemValue)}
            style={style.input}
            >
              <Picker.Item label="--Seleccione--" value=""/>
              <Picker.Item label="Ahorro" value="ahorro"/>
              <Picker.Item label="Comida" value="comida"/>
              <Picker.Item label="Casa" value="casa"/>
              <Picker.Item label="Gastos Varios" value="gastos"/>
              <Picker.Item label="Ocio" value="ocio"/>
              <Picker.Item label="Salud" value="salud"/>
              <Picker.Item label="Suscripciones" value="suscripciones"/>
            </Picker>
        </View>

        <Pressable
        onPress={()=> handlerGasto({nombre,cantidad,categoria})}
        style={style.submitBtn}>
            <Text style={style.submitBtnTexto}>Agregar gasto</Text>
        </Pressable>
        
      </View>
     </SafeAreaView>
    );
  }

  const style = StyleSheet.create({

    contenedor:{
         backgroundColor:'#1e40af',
         flex:1
    },
    btnCancelar:{
      backgroundColor:'#db2777',
      padding:10,
      marginTop:30,
      marginHorizontal:10
    },
    btnCancelarTexto:{
    textTransform:'uppercase',
    fontWeight:'bold',
    textAlign:'center',
    color:'#fff'
    },
    formulario:{
        ...globalStyle.contenedor
    },
    titulo:{
      textAlign:'center',
      fontSize:28,
      marginVertical:40,
      color:'#64748b'
    },
    label:{
    color:'#64748b',
    textTransform:'uppercase',
    fontSize:16,
    fontWeight:'bold'
    },
    campo:{
     marginVertical:10
    },
    input:{
      backgroundColor:'#f5f5f5',
      padding:10,
      borderRadius:10,
      marginTop:10

    },
    submitBtn:{
        backgroundColor:'#3b82f6',
        padding:10,
        marginTop:20
    },
    submitBtnTexto:{
     textAlign:'center',
     color:'#fff',
     fontWeight:'bold',
     textTransform:'uppercase'
    }

  })
export default FormularioGasto;