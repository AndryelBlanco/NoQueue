import React from 'react'
import { ContainerTitle, Title } from './Styled_PageTitle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PageTitle = ({ text, icon }) => {
  
  function IconCreator(){
    switch(icon){
      case 'store':
        return <MaterialCommunityIcons name={'format-list-bulleted'} color={'#fff'} size={18}/>
      case 'wallet':
        return <MaterialCommunityIcons name={'format-list-bulleted'} color={'#fff'} size={18}/>
  
    }
  }

  return (
    <ContainerTitle>
      {IconCreator()}
      <Title>{text}</Title>
    </ContainerTitle>
  )
}

export default PageTitle