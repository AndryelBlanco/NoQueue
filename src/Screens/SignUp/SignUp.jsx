import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, TextInput, Button, StyleSheet, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import { MainContainer, ViewImgLogo, FlexItem, Title, FormSignUp, Input,  CreateAccountBtn, CreateAccountText } from './Styled_SignUp';
import { LinearGradient } from 'expo-linear-gradient';

import NoQueueLogo from '../../../assets/icons/AppLogo';







const SignUp = () => {
  return (

    
      <LinearGradient colors={['#00FFF0', '#002249']}>    
      <KeyboardAvoidingView behavior="position" enabled>
        <MainContainer >

          <FlexItem>
            <ViewImgLogo>
              <NoQueueLogo/>
            </ViewImgLogo>
          </FlexItem>
          

          <FlexItem>
            <FormSignUp>

              <Title>Crie a sua conta!</Title>
              <Input placeholder='Nome de usuário' placeholderTextColor='white' color='white'/>
              <Input 
              placeholder='Nome completo' placeholderTextColor='white' color='white'/>
              <Input placeholder='Email' placeholderTextColor='white' color='white'/>
              <Input placeholder='Senha' secureTextEntry={true} password={true} placeholderTextColor='white' color='white'/>
              <Input  
              placeholder='Confirme a sua senha'
              secureTextEntry={true} 
              password={true} 
              placeholderTextColor='white' 
              color='white'
              />


              <CreateAccountBtn activeOpacity={0.5}>
                <CreateAccountText>Criar conta</CreateAccountText>
              </CreateAccountBtn>
            </FormSignUp>

          </FlexItem>

      
        </MainContainer>
        </KeyboardAvoidingView>
        </LinearGradient>

   
  );
}
export default SignUp


