import React from 'react'
import { Text, View } from 'react-native'
import Scanner from '../../Components/Scanner/Scanner'
import { ScannerPageContainer } from './Styled_ScannerPage'

const ScannerPage = () => {
  return (
    <ScannerPageContainer>
      <Text>SCANNER PAGE</Text>
      <Scanner />
    </ScannerPageContainer>
  )
}

export default ScannerPage