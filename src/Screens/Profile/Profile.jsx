import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { UserImage, ProfilePageContainer, UserView, Username, UsernameView, Options, OptionsIcon, OptionsTextView, OptionsText } from './Styled_Profile';
import Svg, { Path } from 'react-native-svg';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';





const Profile = () => {


  return (
    <ProfilePageContainer>

        <UserView>
          <UserImage
           source={require('../../../assets/images/user_picture.jpeg')}/>

           <UsernameView>
             <Username>@dog_auau</Username>
           </UsernameView>
        </UserView>

      <Options activeOpacity={0.6}>
        <OptionsIcon>
          <IconMaterialIcons name="edit" size={20} color="#0075FF" />
        </OptionsIcon>

        <OptionsTextView>
          <OptionsText>
            Alterar Informações
          </OptionsText>
        </OptionsTextView>
      </Options>


      <Options activeOpacity={0.6}>
   
          <OptionsIcon >
            <IconAntDesign name="questioncircleo" size={20} color="#0075FF" />
          </OptionsIcon>

          <OptionsTextView>
            <OptionsText>
              Mais informações
            </OptionsText>
          </OptionsTextView>

      </Options>


      <Options activeOpacity={0.6}>
        <OptionsIcon>
          <IconMaterialIcons name="exit-to-app" size={20} color="#0075FF" />
        </OptionsIcon>

        <OptionsTextView>
          <OptionsText>
            Sair
          </OptionsText>
        </OptionsTextView>
      </Options>      


  


    </ProfilePageContainer>
  );
}

export default Profile