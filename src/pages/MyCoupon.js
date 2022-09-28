import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native'


export default class MyCoupon extends Component {



    render() {
        let { container, button } = styles

        return (

            <ScrollView style={styles.body}
            >
                <View style={container}>
                    <Text style={styles.textcupon}>My coupons: </Text>
                </View>


                <View style={{ alignItems: 'center' }}>

                    <View style={styles.cupon1}>
                        <Text style={{ fontSize: 17, color: 'black', marginLeft: 20 }}>
                             70% OFF tá bom pra você?💬
                        </Text>
                        <Text style={{ fontSize: 17, color: 'black', marginLeft: 20 }}>
                            🍛 Arroz & Feijão
                        </Text>
                        <Text style={{ fontSize: 17, color: 'black', marginLeft: 20 }}>
                             Vem completar a despensa no
                            mercado! 🚀
                        </Text>
                    </View>

                    <View style={styles.cupon2}>
                        <Text style={{ fontSize: 17, color: 'black', marginLeft: 20 }}>
                            👉 Mais economia por menos de R$2
                        </Text>
                        <Text style={{ fontSize: 17, color: 'black', marginLeft: 20 }}>
                            Vem de SuperOferta: cupons de
                            desconto só R$1,49.🤑
                        </Text>
                    </View>

                    <View style={styles.cupon1}>
          <Text style={{ fontSize: 17, color: 'black',marginLeft:20 }}>
          ❤️ Se eu te conheço bem...
            </Text>
            <Text style={{ fontSize: 17, color: 'black',marginLeft:20 }}>
              Deve tá pensando no almoço
            </Text>
            <Text style={{ fontSize: 17, color: 'black',marginLeft:20 }}>
              Clique aqui e surpreeda-se!🤘
            </Text>
          </View>

          <View style={styles.cupon2}>
            <Text style={{ fontSize: 17, color: 'black', marginLeft:20 }}>
            Você pediu cupom?🎟️
            </Text>
            <Text style={{ fontSize: 17, color: 'black', marginLeft:20 }}>
            Então tó, vem fazer o pedido.🚀
            </Text>
          </View>

          <View style={styles.cupon2}>
            <Text style={{ fontSize: 17, color: 'black', marginLeft:20 }}>
            Pra ficar gostoso 🍕
            </Text>
            <Text style={{ fontSize: 17, color: 'black', marginLeft:20 }}>
           Separei uma lista de restaurantes que dão água na boca. clica!
            </Text>
          </View>

          <View style={styles.cupon2}>
            <Text style={{ fontSize: 17, color: 'black', marginLeft:20 }}>
            PROMO tão boa que até gelei ❄️
            </Text>
            <Text style={{ fontSize: 17, color: 'black', marginLeft:20 }}>
            💧 R$30 pra usar na primeira compra em mercado!🤑
            </Text>
          </View>

          <View style={{height:60}}></View>



          

                </View>

              


            </ScrollView>
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
    },
    body: {
        backgroundColor: '#790606',
        
    },
    textcupon: {
        color: '#ffffff',
        fontSize: 20,
        marginTop: 60
    },
    cupon1: {
        marginTop: 60,
        width: 300,
        height: 130,
        backgroundColor: 'white',
        justifyContent: 'center',
        //alignItems: 'center',
        borderRadius: 10,
    },
    cupon2: {
        marginTop: 60,
        width: 300,
        height: 120,
        backgroundColor: 'white',
        justifyContent: 'center',
        //alignItems: 'center',
        borderRadius: 10,
    }
});

