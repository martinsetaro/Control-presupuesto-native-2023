import React, { useEffect } from 'react';
import { Text,
View,
StyleSheet,
Pressable
} from 'react-native';
import globalStyle from '../styles';
import { Picker } from '@react-native-picker/picker';




const Filtro = ({setFiltro,filtro,gastos,setGastosFiltrados}) =>{


    useEffect(()=>{

         if(filtro === ''){
            setGastosFiltrados([])
         }else {
            const gastosFiltrados = gastos.filter ( gasto => gasto.categoria == filtro)
            console.log(gastosFiltrados)
            setGastosFiltrados(gastosFiltrados)
         }




    },[filtro])


    return (
   
      <View style={style.contenedor}>
        <Text style={style.label}>Filtrar Gastos</Text>
        <Picker
           selectedValue={filtro}
           onValueChange={(valor) => {
            setFiltro(valor)
           }}
          
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
   
    );
  }

  const style = StyleSheet.create({
    contenedor:{
        ...globalStyle.contenedor,
        transform:[{translateY:0}],
        marginTop:80
    },
    label:{
        fontSize:22,
        fontWeight:'900',
        color:'#64748b'
    }
  })
export default Filtro;