import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Button, TouchableHighlight } from 'react-native';
import { MainContainer, ViewImgLogo, ImgLogo, FlexItem, Title, FormLogin, Input, ForgotPassword, AlternativeLogin, AlternativeLogin2, AltLoginText, LoginBtn, LoginText, SignUpLink } from './Styled_Login';
import { LinearGradient } from 'expo-linear-gradient';
import GoogleLogo from '../../../assets/icons/GoogleLogo';
import FacebookLogo from '../../../assets/icons/FacebookLogo';
import NoQueueLogo from '../../../assets/icons/AppLogo';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";





const Login = () => {
  return (

    <LinearGradient colors={['#00FFF0', '#002249']}>

     
      <KeyboardAvoidingView behavior='position'>
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
              <Input 
              placeholder='Senha'
               secureTextEntry={true} 
               password={true} 
               placeholderTextColor='white'
                color='white'

                />
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
              <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                <SignUpLink>
                  Não tem uma conta?
                </SignUpLink>
        
                  <TouchableOpacity activeOpacity={0.2}>
                    <SignUpLink  style={{fontWeight: 'bold'}}> Cadastre-se.</SignUpLink>
                  </TouchableOpacity>
        
              </View>
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
      </KeyboardAvoidingView>


      </LinearGradient>
  );
}
export default Login



const firebaseConfig = {
  apiKey: "AIzaSyDYrXm6MUj2GilfiF58bnpPshybl9ONrj4",
  authDomain: "noqueue-a0393.firebaseapp.com",
  projectId: "noqueue-a0393",
  storageBucket: "noqueue-a0393.appspot.com",
  messagingSenderId: "529737889881",
  appId: "1:529737889881:web:5a130ec5db31a48f06d948"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

