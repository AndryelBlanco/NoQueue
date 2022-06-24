import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, TextInput, Button, StyleSheet } from 'react-native';
import { MainContainer, ViewImgLogo, ImgLogo, FlexItem, Title, FormSignUp, Input, LoginButton, ForgotPassword, AlternativeLogin, AlternativeLogin2, AltLoginText } from './Styled_Login';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';




const Login = () => {
  return (

    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>

     
      <MainContainer >

        <FlexItem>
          <ViewImgLogo>
            <ImgLogo
            source={require('../../../assets/icons/AppLogo.png')}
            />
          </ViewImgLogo>
        </FlexItem>


        <FlexItem>
          <FormSignUp>

            <Title>Bem-vindo!</Title>
            <Input placeholder='Email'/>
            <Input placeholder='Senha'/>
            <Button
            title='Log in'
            color='#0057FF'
            />

          </FormSignUp>

        </FlexItem>


        <FlexItem>
            <TouchableOpacity activeOpacity={0.2}>
              <ForgotPassword>Esqueceu a senha?</ForgotPassword>
            </TouchableOpacity>
        </FlexItem>


        <FlexItem>
          <AlternativeLogin>
            <AlternativeLogin2>
            <Icon name='google' size={20} color='white'/>
            <AltLoginText>Google</AltLoginText>
            </AlternativeLogin2>

            <AlternativeLogin2>
            <Icon name='facebook' size={20} color='white' />
              <AltLoginText>Facebook</AltLoginText>
            </AlternativeLogin2>
          </AlternativeLogin>
        </FlexItem>

      </MainContainer>

      </LinearGradient>
  );
}
export default Login


