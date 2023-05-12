
import React, { useEffect, useState } from 'react'
import { Text,
Image,
View,
Alert,
StyleSheet,
Pressable,
ScrollView,
Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import { generarId } from './src/helpers';
import ListadoGastos from './src/components/ListadoGastos';
import Filtro from './src/components/Filtro';


const App = () =>{

const[ isValidPresupuesto , setIsValidPresupuesto] = useState(false)
const [ presupuesto,setPresupuesto] = useState(0)
const [gastos,setGastos] = useState([])
const [modal,setModal] = useState(false)
const [ gasto,setGasto] = useState({})
const [ filtro,setFiltro]= useState('')
const [ gastosFiltrados,setGastosFiltrados] = useState([])


 useEffect(()=>{

const obtenerPresupuestoStorage = async ()=>{
try { // el doble simbolo ? hace una comprobacion
  const presupuestoStorage = await AsyncStorage.getItem
  ('planificador_presupuesto') ?? 0 //si no hay nada le asigna un valor ej: 0

if(presupuestoStorage > 0 ){
  setPresupuesto(presupuestoStorage)
  setIsValidPresupuesto(true)
}


} catch (Error) {
  console.log(Error)
}
}
obtenerPresupuestoStorage();
 },[])



useEffect(()=>{
if(isValidPresupuesto){
const guardarPresupuestoStorage = async ()=>{
try {
  await AsyncStorage.setItem('planificador_presupuesto', presupuesto)

} catch (Error) {
   console.log(Error)
}

}

guardarPresupuestoStorage();
}
},[isValidPresupuesto])

useEffect(()=>{

  const obtenerGastosStorage = async () => {
   
    try {

      const gastosStorage = await AsyncStorage.getItem('planificador_gastos')

      setGastos( gastosStorage ? JSON.parse(gastosStorage) : [])
      
    } catch (error) {
      console.log(error)
    }


  }
obtenerGastosStorage();


},[])


useEffect(()=>{
const guardarGastosStorage = async () => {
try {

    await AsyncStorage.setItem('planificador_gastos',JSON.stringify(gastos))
    
  } catch (Error) {
    console.log(Error)
  }

}

guardarGastosStorage()

},[gastos]);



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


  const eliminarGasto = id => {

    Alert.alert("¿Deseas eliminar este gasto?","Un gasto eliminado no se puede recuperar",
    [{ text:'No', style:'cancel'},
      {text: 'Si , eliminar', onPress : ()=>{
        const gastosActualizados = gastos.filter( gastoState => gastoState.id != id)
        setGastos(gastosActualizados)
        setModal(!modal)
        setGasto({})

      }}
    ])
     console.log("eliminando",id)
  }


const resetearApp = ()=>{
  Alert.alert(
    "¿Deseas resetear la app?",
    "Essto eliminará presupuesto y gastos",
    [{ text:"No", style:'cancel'},{text:"Si Eliminar", onPress : async ()=>{
 try {
  await AsyncStorage.clear()

  setIsValidPresupuesto(false)
  setGastos([])
  setPresupuesto(0)

 } catch (error) {
  console.log(error)
 }
    }}]
  )
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
          resetearApp={resetearApp}
          />):
          (<NuevoPresupuesto
             presupuesto={presupuesto}
             setPresupuesto={setPresupuesto}
            handlerNuevoPresupuesto={handlerNuevoPresupuesto}/>)}
      
      </View>

      

     {isValidPresupuesto && (
      <>
      <Filtro
      setFiltro={setFiltro}
      filtro={filtro}
      gastos={gastos}
      setGastosFiltrados={setGastosFiltrados}
      />
      <ListadoGastos
      setModal={setModal}
      gastos={gastos}
      setGasto={setGasto}
      filtro={filtro}
      gastosFiltrados={gastosFiltrados}
      />
      </>
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
          eliminarGasto={eliminarGasto}
        />
        </Modal>
      )}


      {isValidPresupuesto && (
        <Pressable
        style={style.pressable}
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
  
 },
 pressable:{
 
  width:60,
  height:60,
  position:'absolute',
  bottom:10,
  right:20,
 }
  })


export default App;
