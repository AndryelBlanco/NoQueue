import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { MainContainer, ViewImgLogo, ImgLogo} from './Styled_Login';
import Svg, { Path } from 'react-native-svg';


const Login = () => {
  return (

    
    <MainContainer>

      <ViewImgLogo>
        <ImgLogo
        source={require('../../../assets/icons/AppLogo.png')}
        />
      </ViewImgLogo>

    </MainContainer>

  );
}
export default Login


