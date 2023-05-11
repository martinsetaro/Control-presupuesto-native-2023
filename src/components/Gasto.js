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
import { formatearCantidad , formatearFecha } from '../helpers';

const Gasto = ({gasto,setModal,setGasto}) =>{

  const iconos = {
    ahorro: require('../img/icono_ahorro.png'),
    casa: require('../img/icono_casa.png'),
    comida: require('../img/icono_comida.png'),
    gastos: require('../img/icono_gastos.png'),
    ocio: require('../img/icono_ocio.png'),
    salud: require('../img/icono_salud.png'),
    suscripciones: require('../img/icono_suscripciones.png')
    
  };

const {nombre,cantidad,categoria,id,fecha} = gasto


const handleAcciones = ()=>{
  setModal(true)
  setGasto(gasto)
}



    return (
    
      <Pressable
      onLongPress={handleAcciones}
      >
      <View style={style.contenedor}>

          <View style={style.contenido}>
                <View style={style.contenedorImagen}>
                       <Image
                       style={style.imagen}
                       source={iconos[categoria]}/>

                   <View style={style.contenedorTexto}>
                       <Text style={style.categoria}>{categoria}</Text>
                       <Text style={style.nombre}>{nombre}</Text>
                       <Text style={style.fecha}>{formatearFecha(fecha)}</Text>
                   </View>

                </View>
            
             <Text style={style.cantidad}>{formatearCantidad(cantidad)}</Text>

          </View>
        
      </View>
    </Pressable>
    );
  }

  const style=StyleSheet.create({

 contenedor:{
...globalStyle.contenedor,
marginBottom:10
 },
 contenido:{
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center'
 },
 contenedorImagen:{
    flexDirection:'row',
    alignItems:'center',
    flex:1
    
 },
 contenedorTexto:{
     flex:1
 },
 imagen:{
width:80,
height:80,
marginRight:20
 },
 categoria:{
   color:'#94a3b8',
   fontSize:16,
   fontWeight:'bold',
   textTransform:'uppercase',
   marginBottom:5
 },
 nombre:{
fontSize:18,
color:'#64748b',
marginBottom:5
 },
 cantidad:{
  fontSize:20,
  fontWeight:'700'
 },
 fecha:{
  fontWeight:'700',
  color:'#db2777'
 }


  })
export default Gasto;