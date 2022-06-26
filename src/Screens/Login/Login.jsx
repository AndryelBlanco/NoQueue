import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, TextInput, Button, StyleSheet } from 'react-native';
import { MainContainer, ViewImgLogo, ImgLogo, FlexItem, Title, FormSignUp, Input, LoginButton, ForgotPassword, AlternativeLogin, AlternativeLogin2, AltLoginText, LoginBtn, LoginText } from './Styled_Login';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import GoogleLogo from '../../../assets/icons/GoogleLogo';
import FacebookLogo from '../../../assets/icons/FacebookLogo';
import NoQueueLogo from '../../../assets/icons/AppLogo';





const Login = () => {
  return (

    <LinearGradient colors={['#00FFF0', '#002249']}>

     
      <MainContainer >

        <FlexItem>
          <ViewImgLogo>
            {/* <ImgLogo
            source={require('../../../assets/icons/AppLogo.png')}
            /> */}
            <NoQueueLogo/>
          </ViewImgLogo>
        </FlexItem>


        <FlexItem>
          <FormSignUp>

            <Title>Bem-vindo!</Title>
            <Input placeholder='Email'/>
            <Input placeholder='Senha'/>
            {/* <Button
            title='Log in'
            color='#0057FF'
            /> */}

            <LoginBtn activeOpacity={0.5}>
              <LoginText>Login</LoginText>
            </LoginBtn>
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

            <GoogleLogo/>
            <AltLoginText>Google</AltLoginText>
            </AlternativeLogin2>

            <AlternativeLogin2>
              <FacebookLogo/>
            {/* <Icon name='facebook' size={24} color='white' /> */}
              <AltLoginText>Facebook</AltLoginText>
            </AlternativeLogin2>
          </AlternativeLogin>
        </FlexItem>
        

  
      </MainContainer>



      </LinearGradient>
  );
}
export default Login


