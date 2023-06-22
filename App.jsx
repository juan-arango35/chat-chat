import { Container, NativeBaseProvider } from 'native-base';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Chat from './src/Screens/Chat';
import Login from './src/Screens/Login';

const App = () => {
  const [userName, setUserName] = useState(null);
  return (
    <NativeBaseProvider>
      <Container style={styles.container}>
        {!userName ? <Login /> : <Chat />}
      </Container>
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#16202b',
    flex: 1,
  },
});
