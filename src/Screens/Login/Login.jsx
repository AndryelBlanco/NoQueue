import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, TextInput, ViewImgLogo } from 'react-native';
import { MainContainer } from './Styled_Login';
import Svg, { Path } from 'react-native-svg';


const Login = () => {
  return (

    
    <MainContainer>
      {/* <TextInput
        style={{padding: 100}}
        placeholder="Testando..."
      /> */}
      <ViewImgLogo>
       <ImgLogo source={require('../../../assets/icons/AppLogo.png')}/>
>
       
       </ImgLogo>

      </ViewImgLogo>

    </MainContainer>

  );
}
export default Login


