import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { Balance, BalanceHistory, BalanceTitle, ContainerHistory, DateHistory, History, PageBalance, PageTitle, PlusIcon, TextDolar, Title, WalletPageContainer, TextPlus, PageHistory, DataText, PageHistory2} from './Styled_wallet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Wallet = () => {
  const array = [{
    title: 'Depósito via Pix',
    ammount: '100,00',
    date: '09/08/2022'
  },
  {
    title: 'Depósito via Pix',
    ammount: '500,00',
    date: '09/08/2022'
  },
  {
    title: 'Depósito via Pix',
    ammount: '100,00',
    date: '09/08/2022'
  },

 
]

  return (
    <WalletPageContainer>
        <PageTitle>
          <Title>Minha Carteira</Title>
        </PageTitle> 
        <PageBalance>
          <BalanceTitle>Saldo disponível</BalanceTitle>
          <Balance>
            <TextDolar>
              R$ 999,99
            </TextDolar>
            <PlusIcon>
              <TextPlus>
                +
              </TextPlus>
            </PlusIcon>
          </Balance>
        </PageBalance>
        <PageHistory2>
          <BalanceTitle>
            Depósito via Pix
          </BalanceTitle>
          <TextDolar>
            R$ 299,99
          </TextDolar>
          <DataText>
            11/08/2022
          </DataText>
        </PageHistory2>
        {array.map((item) =>{

          return(
            <PageHistory2>
              <BalanceTitle>
                {item.title}
              </BalanceTitle>
              <TextDolar>
                R$ {item.ammount}
              </TextDolar>
              <DataText>
                {item.date}
              </DataText>
            </PageHistory2>
          )

        })}
    </WalletPageContainer>
  );
}

export default Wallet