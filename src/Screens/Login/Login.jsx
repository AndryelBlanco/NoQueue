import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { MainContainer, ViewImgLogo, ImgLogo, FlexItem, Title, FormLogin, Input, ForgotPassword, AlternativeLogin, AlternativeLogin2, AltLoginText, LoginBtn, LoginText, SignUpLink } from './Styled_Login';
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
            <NoQueueLogo/>
          </ViewImgLogo>
        </FlexItem>


        <FlexItem>
          <FormLogin>

            <Title>Bem-vindo!</Title>
            <Input placeholder='Email' placeholderTextColor='white' color='white'/>
            <Input placeholder='Senha' secureTextEntry={true} password={true} placeholderTextColor='white' color='white'/>

            <LoginBtn activeOpacity={0.5}>
              <LoginText>Login</LoginText>
            </LoginBtn>
          </FormLogin>

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
        
        <FlexItem>
          <TouchableOpacity activeOpacity={0.2}>
            <SignUpLink>
              Não tem uma conta? <Text style={{fontWeight:'bold'}}>Cadastre-se.</Text>
              </SignUpLink>
          </TouchableOpacity>
        </FlexItem>

  
      </MainContainer>



      </LinearGradient>
  );
}
export default Login


