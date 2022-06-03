import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { UserImage, ProfilePageContainer, UserView, Username, UsernameView, Options, OptionsIcon, OptionsTextView, OptionsText } from './Styled_Profile';


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

      <Options>

        <OptionsIcon source={require('../../../assets/icons/sair.svg')}/>

        <OptionsTextView>
          <OptionsText>
            Alterar Informações
          </OptionsText>
        </OptionsTextView>

      </Options>




    </ProfilePageContainer>
  );
}

export default Profile