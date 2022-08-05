import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { Balance, BalanceTitle, BalanceHistory, ContainerHistory, DateHistory, History, PageBalance, PageTitle, Title, WalletPageContainer } from './Styled_wallet';


const Wallet = () => {


  return (
    <WalletPageContainer>
        <PageTitle>
          <Title>Minha Carteira</Title>
        </PageTitle> 
        <PageBalance>
          <BalanceTitle>Saldo disponível</BalanceTitle>
          <Balance>R$ 999,99</Balance>
        </PageBalance>
        <History>Histórico</History>
        <ContainerHistory>
          <BalanceHistory>R$ 120,25</BalanceHistory>
          <DateHistory>20/05/22</DateHistory>
        </ContainerHistory>
    </WalletPageContainer>
  );
}


export default Wallet