
import React, { useState } from 'react'
import { Text,
Image,
View,
Alert,
StyleSheet,
Pressable,
ScrollView,
Modal } from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import { generarId } from './src/helpers';
import ListadoGastos from './src/components/ListadoGastos';


const App = () =>{

const[ isValidPresupuesto , setIsValidPresupuesto] = useState(false)
const [ presupuesto,setPresupuesto] = useState(0)
const [gastos,setGastos] = useState([])
const [modal,setModal] = useState(false)
const [ gasto,setGasto] = useState({})





  const handlerNuevoPresupuesto = (presupuesto)=>{
         if(Number(presupuesto) > 0){
          setIsValidPresupuesto(true)
        }else{
          Alert.alert('Error','El presupuesto no puede ser 0 o menor',[{text: 'Aceptar'}])
         }
  }

  const handlerGasto = gasto => {

    if([gasto.nombre,gasto.cantidad,gasto.categoria].includes('')){
      Alert.alert("Error", "Todos los campos son obligatorios")
      return;
    }



    if(gasto.id){
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)

    }else {

       gasto.id = generarId();
       gasto.fecha= Date.now();
       setGastos([...gastos, gasto])

    }

 

   setModal(!modal)
  }







    return (
      
     <View style={style.contenedor}>
     <ScrollView>
      <View style={style.header}>
          <Header/>

          {isValidPresupuesto ? ( 
          <ControlPresupuesto
          gastos={gastos}
          presupuesto={presupuesto}
          />):
          (<NuevoPresupuesto
             presupuesto={presupuesto}
             setPresupuesto={setPresupuesto}
            handlerNuevoPresupuesto={handlerNuevoPresupuesto}/>)}
      
      </View>

     {isValidPresupuesto && (
      <ListadoGastos
      setModal={setModal}
      gastos={gastos}
      setGasto={setGasto}
      />
     )}

</ScrollView>

      {modal && (
        <Modal
         animationType='slide'
         visible={modal}
        >

        <FormularioGasto
          handlerGasto={handlerGasto}
          setModal={setModal}
          setGasto={setGasto}
          gasto={gasto}
        />
        </Modal>
      )}


      {isValidPresupuesto && (
        <Pressable
        onPress={()=>setModal(!modal)}
        >
          <Image 
          style={style.imagen}
          source={require('./src/img/nuevo-gasto.png')}/>
        </Pressable>
      )}
  
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
    minHeight:400

 },
 imagen:{
  width:60,
  height:60,
  position:'absolute',
  bottom:10,
  right:20,
 }
  })


export default App;
