import React, { useState , useEffect } from 'react';
import { Text,
View,
StyleSheet,
Pressable,
} from 'react-native';
import globalStyle from '../styles';
import { formatearCantidad } from '../helpers';
import CircularProgress from 'react-native-circular-progress-indicator';



const ControlPresupuesto = ({presupuesto,gastos,resetearApp}) =>{

  



  const [disponible,setDisponible]= useState(0);
  const [gastado,setGastado]=useState(0)
  const [porcentaje,setProcentaje]= useState(0)


  useEffect(() => {
    const totalGastado = gastos.reduce((acc, gasto) => Number(gasto.cantidad) + acc, 0);
    setGastado(totalGastado);
    const nuevoDisponible = presupuesto - totalGastado;
    setDisponible(nuevoDisponible);

   

    setProcentaje(((presupuesto - nuevoDisponible)/presupuesto)* 100)

  }, [gastos, presupuesto]);


    return (
     
      <View style={style.contenedor}>
        <View style={style.centrarGrafica}>
           <CircularProgress
           value={porcentaje}
           duration={1500}
           radius={150}
           valueSuffix={'%'}
           title='Gastado'
           inActiveStrokeColor='#f5f5f5'
           inActiveStrokeWidth={10}
           activeStrokeColor='#3b82f6'
           activeStrokeWidth={20}
           />

        </View>
        <View style={style.contenedorTexto}>

          <Pressable 
          onLongPress={() => resetearApp()}
          style={style.boton}>
            <Text style={style.textoBoton}>Reiniciar App</Text>
          </Pressable>
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

},
boton:{
 backgroundColor:'#db2777',
 padding:10,
 marginBottom:40,
 borderRadius:5
},
textoBoton:{
textAlign:'center',
color:'#fff',
fontWeight:'bold',
textTransform:'uppercase'
}
  })
export default ControlPresupuesto;