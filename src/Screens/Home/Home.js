import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../context/authContext';


const Home = () => {

  const { signIn } = useContext(AuthContext)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity>
        <Text onPress={() => signIn()}>Home!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home