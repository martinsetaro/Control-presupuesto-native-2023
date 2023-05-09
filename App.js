
import React, { useState } from 'react'
import { Text,
SafeAreaView,
View,
Alert,
StyleSheet,
Pressable,
Modal } from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';

const App = () =>{

const[ isValidPresupuesto , setIsValidPresupuesto] = useState(false)
const [ presupuesto,setPresupuesto] = useState(0)

  const handlerNuevoPresupuesto = (presupuesto)=>{
         if(Number(presupuesto) > 0){
          setIsValidPresupuesto(true)
        }else{
          Alert.alert('Error','El presupuesto no puede ser 0 o menor',[{text: 'Aceptar'}])
         }
  }



    return (
     <View style={style.contenedor}>
      <View style={style.header}>
          <Header/>

          {isValidPresupuesto ? ( 
          <ControlPresupuesto
          presupuesto={presupuesto}
          />):
          (<NuevoPresupuesto
             presupuesto={presupuesto}
             setPresupuesto={setPresupuesto}
            handlerNuevoPresupuesto={handlerNuevoPresupuesto}/>)}
      
      </View>
  
     </View>
    );
  }

  const style= StyleSheet.create({
   contenedor:{
    flex:1,
    backgroundColor:'#f5f5f5'
   },
   header:{
    backgroundColor:'#3b82f6',

 },
  })


export default App;
