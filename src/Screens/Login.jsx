import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar , Image} from 'react-native';
import { Item, Input, Text, Button } from 'native-base';

import chatLogo from '../assets/chatLogo.png';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/*   el estaus bas es para colocar blanco la parte de arriba del celular en caso que lo tenga */}
      <StatusBar barStyle="light-content" />
      <View>
        {/*   <Image
        style={styles.logo}
        source={require('../assets/chatLogo.png')}
      /> */}

{/*       estaimagen no me carga */}.

      <Image style={styles.logo} source={chatLogo} resizeMode="contain" />
      </View>

      <Item>

        <Input placeholder="nombre de usuariio" />
      </Item>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 100,
  },

  logo: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
});
