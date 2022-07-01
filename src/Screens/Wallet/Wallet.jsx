import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { Balance, PageBalance, PageTitle, Title, WalletPageContainer } from './Styled_wallet';


const Wallet = () => {


  return (
    <WalletPageContainer>
        <PageTitle>
          <Title>
            Minha Carteira
          </Title>
        </PageTitle> 
        <PageBalance>
          <Balance>
            Saldo
          </Balance>
        </PageBalance> 
    </WalletPageContainer>
  );
}

export default Wallet