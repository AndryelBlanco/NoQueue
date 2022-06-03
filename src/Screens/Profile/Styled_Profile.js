import styled from 'styled-components';

export const ProfilePageContainer = styled.View`
display: flex;
align-items: center;
flex-direction: column;
margin: 48px 0 270px 0;
background-color: #EEEEEE;
height: 100%;
`;


export const UserView = styled.View`
display: flex;
align-items: center;
flex-direction: column;
margin-bottom: 130px;

`;

export const UserImage = styled.Image`
width: 180px;
height: 180px;
border-radius: 100px;
border: 4px solid white;


`;

export const Username = styled.Text`
color: gray;
font-size: 24px;
`;

export const UsernameView = styled.View`
display: flex;
justify-content: center;
align-items: center;
margin-top: 18px;
width: 240px;
height: 60px;
background-color: white;
border-radius: 12px;

`;

export const Options = styled.View`
border-radius: 12px;
background-color: white;
height: 60px;
width: 95%;
display: flex;
flex-direction: row;
align-items: center;
margin-top: 20px;

`;

export const OptionsIcon = styled.Image`
margin: 0 15px 0 20px;
`;

export const OptionsText = styled.Text`
text-decoration: none;
font-size: 18px;
color: #0075FF;
`;

export const OptionsTextView = styled.View``;