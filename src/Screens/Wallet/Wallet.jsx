import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { PageTitle, Title, WalletPageContainer } from './Styled_wallet';


const Wallet = () => {


  return (
    <WalletPageContainer>
        <PageTitle>
            <Title>
                Minha Carteira
            </Title>
        </PageTitle>
    </WalletPageContainer>
  );
}

export default Wallet