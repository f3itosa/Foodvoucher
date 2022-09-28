import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Notification } from './src/NotificationManager'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
//import Redirect from './src/pages/Coupons';
import Coupons from './src/pages/Coupons';
import MyCoupon from './src/pages/MyCoupon';



const notificador = Notification;
const Stack = createStackNavigator();

export default class App extends Component {

  componentDidMount() {
    notificador.configure();
    notificador.createChannel();
    notificador.agendarNotificacoes();

  }


  //criar notificacao
  mandarNotificacao = () => {
    notificador.showNotification(
      1,
      "Food Voucher",
      "🍔 Que tal um lanchinho?",
      {}, // data
      {} // options
    )

   
  }



  cancelar = () => {
    notificador.cancelAllLocalNotification()
  }

  render() {
    let { container, button } = styles

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {({navigation}) => 
            { 
              notificador.setNavegador(navigation);

              return(
              <Home enviar={this.mandarNotificacao} 
              cancelar={this.cancelar}/>)}}


            </Stack.Screen >

            <Stack.Screen name="Coupons">
            {(navigation) => { return(<Coupons />)}}

            </Stack.Screen >

            <Stack.Screen name="MyCoupon">
            {(navigation) => { return(<MyCoupon />)}}

            </Stack.Screen >

        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}

/* Estilização do projeto */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 10
  }
});