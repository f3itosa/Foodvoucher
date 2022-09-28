import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native'
//import { ScrollView } from 'react-native-gesture-handler';
import Logo from '../../Icons/Logo';
import { Notification } from '../NotificationManager';



const notificador = Notification;

export default function Home(props) {



  let { container, button } = styles

  return (

    <ScrollView style={styles.body}>

      <View style={styles.logo}>
        <Logo/>
      </View>
      


      <View style={container}>
        <TouchableOpacity
          style={button}
          onPress={() => props.enviar()}
        >
          <Text>Receber notificação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={button}
          onPress={() => props.cancelar()}>
          <Text>Cancelar notificações</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )

}

/* Estilização do projeto */
const styles = StyleSheet.create({
  body:{
    backgroundColor: '#790606'
  },
  logo:{
    marginTop:20
  },
  container: {
    marginTop:30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 250,
    height: 50,
    marginTop: 10,
    borderRadius:10
  }
});