import React, { useState , useEffect } from 'react';
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

const ControlPresupuesto = ({presupuesto,gastos}) =>{



  const [disponible,setDisponible]= useState(0);
  const [gastado,setGastado]=useState(0)


  useEffect(() => {
    const totalGastado = gastos.reduce((acc, gasto) => Number(gasto.cantidad) + acc, 0);
    setGastado(totalGastado);
    const nuevoDisponible = presupuesto - totalGastado;
    setDisponible(nuevoDisponible);
  }, [gastos, presupuesto]);


    return (
     
      <View style={style.contenedor}>
        <View style={style.centrarGrafica}>
            <Image 
            style={style.imagen}
            source={require('../img/grafico.jpg')} />
        </View>
        <View style={style.contenedorTexto}>
            <Text style={style.valor}>
                <Text style={style.label}>Presupuesto: {''}</Text>
                {formatearCantidad(presupuesto)}
            </Text>
            <Text style={style.valor}>
                <Text style={style.label}>Disponible: {''}</Text>
                {formatearCantidad(disponible)}
            </Text>
            <Text style={style.valor}>
                <Text style={style.label}>Gastado: {''}</Text>
                {formatearCantidad(gastado)}
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
},
contenedorTexto:{
   marginTop:50,

},
valor:{
 fontSize:24,
 textAlign:'center',
 marginBottom:10
},
label:{
  fontWeight:'700',
  color:'#3b82f6'

}
  })
export default ControlPresupuesto;