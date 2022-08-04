import React, { useContext, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Button, TouchableHighlight } from 'react-native';
import { MainContainer, ViewImgLogo, ImgLogo, FlexItem, Title, FormLogin, Input, ForgotPassword, AlternativeLogin, AlternativeLogin2, AltLoginText, LoginBtn, LoginText, SignUpLink, WarningText } from './Styled_Login';
import { LinearGradient } from 'expo-linear-gradient';
import GoogleLogo from '../../../assets/icons/GoogleLogo';
import FacebookLogo from '../../../assets/icons/FacebookLogo';
import NoQueueLogo from '../../../assets/icons/AppLogo';
import { handleSignIn, handleSignUp,  signInWithGoogle } from '../../config/firebase';






const Login = () => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [warning, setWarning] = useState({
    field: null,
    message: null
  })

  // useEffect(() => {
  //   console.log('EMAIL:', userEmail)
  //   console.log('PASSWRD:', userPassword)
  // }, [userEmail,userPassword ])

  function handleLogin() {
    if(userEmail == '' && userPassword != ''){
      setWarning([{
        field: 'email',
        message: 'Por favor digite um email'
      }])
    }else if(userEmail != '' && userPassword == ''){
      setWarning([{
        field: 'password',
        message: 'Por favor digite uma senha'
      }])
    }else if(userEmail == '' && userPassword == ''){
      setWarning({
        field: 'all',
        message: 'Por favor digite '
      })
    }
    if(userEmail != '' && userPassword != ''){
      console.log("im here")
      handleSignIn(userEmail, userPassword)
    }
  }

 

  function handleLoginWithGoogle(){
    handleSignIn('andryelteste@gmail.com', 'batata')
  }

  return (

    <LinearGradient colors={['#00FFF0', '#002249']}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <MainContainer >
          <FlexItem>
              <ViewImgLogo>
                <NoQueueLogo/>
              </ViewImgLogo>        
          </FlexItem>
          <FlexItem>
            <FormLogin>
              <Title>Bem-vindo!</Title>
              <Input 
                placeholder='Email' 
                placeholderTextColor='white' 
                color='white' 
                value={userEmail} 
                onChangeText={text => {
                  setUserEmail(text); 
                  setWarning({field: null, message: null})
                }}
                hasActiveWarning={warning.field == 'email' || warning.field == 'all' ? true : false}
              />
              {warning.field == 'email'|| warning.field == 'all' &&
                <WarningText>{warning.field == 'all' ? `${warning.message} um email` : warning.message}</WarningText>
              }
              <Input 
                placeholder='Senha'
                secureTextEntry={true} 
                password={true} 
                placeholderTextColor='white'
                value={userPassword}
                onChangeText={passwrd => {
                  setUserPassword(passwrd); 
                  setWarning({field: null, message: null})
                }}
                color='white'
                hasActiveWarning={warning.field == 'password' || warning.field == 'all' ? true : false}
                onFocus={() => setWarning({
                  field: null,
                  message: null
                })}
              />
              {warning.field == 'email'|| warning.field == 'all' &&
                <WarningText>{warning.field == 'all' ? `${warning.message} uma senha` : warning.message}</WarningText>
              }
              <LoginBtn activeOpacity={0.5} onPress={handleLogin}>
                <LoginText>Login</LoginText>
              </LoginBtn>
            </FormLogin>
          </FlexItem>
          <FlexItem>
              <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                <SignUpLink>
                  Não tem uma conta?
                </SignUpLink>
                  <TouchableOpacity 
                    activeOpacity={0.2}
                  >
                    <SignUpLink  style={{fontWeight: 'bold'}}> Cadastre-se.</SignUpLink>
                  </TouchableOpacity>
              </View>
          </FlexItem>
          <FlexItem>
            <AlternativeLogin>
              <AlternativeLogin2 onPress={handleLogin}>
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
              <ForgotPassword>Esqueceu a senha?</ForgotPassword>
            </TouchableOpacity>
          </FlexItem>
        </MainContainer>
      </KeyboardAvoidingView>


      </LinearGradient>
  );
}
export default Login



