import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { AddTitle, Balance, BalanceTitle,ButtonAdd, ButtonBuy, BuyTitle, CheckOutPageContainer, PageBalance, PageTitle, Title } from './Styled_Checkout';


const Checkout = () => {

  return (
    <CheckOutPageContainer>
        <PageTitle>
          <Title>Checkout</Title>
        </PageTitle> 
        <PageBalance>
          <BalanceTitle>Saldo disponível</BalanceTitle>
          <Balance>R$ 999,99</Balance>
        </PageBalance>
        <ButtonBuy>
          <BuyTitle>Comprar com saldo da conta</BuyTitle>
        </ButtonBuy>
        <ButtonAdd>
          <AddTitle>Adicionar cartão de crédito</AddTitle>
        </ButtonAdd>    
    </CheckOutPageContainer>
  );
}
  
export default Checkout