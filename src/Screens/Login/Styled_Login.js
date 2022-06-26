import { exp } from 'react-native/Libraries/Animated/Easing';
import styled from 'styled-components';

export const texto = styled.Text`
color: black;
font-size: 24px;
`;

export const MainContainer = styled.View`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
height:100%;
box-sizing: border-box;
margin: 0;
padding: 0;
border: 0;
box-sizing: border-box;
`;

export const FlexItem = styled.View`
margin:20px;

`;

export const ViewImgLogo = styled.View`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top:50px;
`;

export const ImgLogo = styled.Image`
width:150px;
height:150px;
`;

export const FormSignUp = styled.View`
display: flex;
width: 100%;
align-items: center;
flex-direction: column;
`;

export const Title = styled.Text`
font-size: 23px;
color:white;

`;
export const Input = styled.TextInput`
margin: 5px auto;
padding: 10px 5px;
border-radius: 10px;
width: 250px;
background-color:white;
border: 1px solid gray;
`;

export const LoginButton = styled.TouchableOpacity`
display: block;
margin: 15px auto;
color: white;
background-color: #0057FF;
padding: 10px 5px;
border-radius: 10px;
width: 70%;
font-size: 16px;
`;




export const ForgotPassword = styled.Text`
color: white;
text-align:center;
`;



export const AlternativeLogin = styled.View`
display: flex;
flex-direction: row;
    
`;

export const AlternativeLogin2 = styled.TouchableOpacity`
display: flex;
flex-direction:row;
align-items: center;
margin: 0 10px;
justify-content:center;
border-radius: 10px;
text-decoration: none;
background-color: #0057FF;
width:100px;
height:  42px;
}
`;

export const AltLoginText = styled.Text`
margin-left:5px;
color:white;
`;

export const LoginBtn = styled.TouchableOpacity`

margin: 10px auto 5px auto;
padding: 10px 5px;
border-radius: 10px;
width: 250px;
background-color:#0057FF;



`;

export const LoginText = styled.Text`
text-align:center;
font-size:16px;
color:white;
`;