import styled from 'styled-components';

export const WalletPageContainer = styled.View`
  display: flex;
  height: 100%;
  padding: 4px;
  background-color: #EEEEEE;
`;

export const PageTitle = styled.View `
  display: flex;
  width: 97%;
  height:49px;
  margin-top:48px;
  margin-left:7px;

  background: #0057FF;
  border: 2px solid #3793FF;
  border-radius: 10px;
`;

export const Title = styled.Text `
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  color:#fff;

  margin-left: 22px;
  padding: 10px;
`;

export const PageBalance = styled.View `
  display: flex;
  
  justify-content: center;
  padding-left: 38px;

  width: 95%;
  height: 100px;
  left: 10px;
  top: 26px;
  


  background: #FFF;
  border-radius: 10px;
`;




export const History = styled.Text `
  display: flex;
  top: 60px;
  left: 18px;
  font-size: 32px;
  font-weight: bold;
  color: #b1b3b1;
`;

export const ContainerHistory = styled.View `
  display: flex;
  width: 95%;
   
  background: #0057FF;
  border: 1.8px solid #FFFFFF;
  border-radius: 10px;
`;

export const BalanceHistory = styled.Text `
  top: 30px;
  left: 60px;
  font-size: 20px;
  color: #FFF;
  
  font-weight: 600;
`;


export const Balance = styled.View `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  color: #00CD6B;
  font-size: 26px;
  
  font-weight: 400;
`;

export const BalanceTitle = styled.Text `
  color: #787878;
  font-size: 18px;
  font-weight: 500;
`;

export const TextDolar = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #8df542;
`;

export const PlusIcon = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 60%;

  border-radius: 8px;
  background-color: #8df542;
  width: 45px;
  height: 45px;
`;

export const TextPlus = styled.Text`
  font-size: 30px;
  color: #FFF;
  margin-bottom: 3px;
  font-weight: bold;
`;

export const PageHistory = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 90%;
  height: 80px;

  background-color: #FFF;
  border: 2px solid #0057FF;
  border-radius: 6px;

  margin-top: 20%;
  align-self: center;
  padding-left: 10px;
`;

export const PageHistory2 = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 90%;
  height: 80px;

  background-color: #FFF;
  border: 2px solid #0057FF;
  border-radius: 6px;

  margin-top: 10%;
  align-self: center;
  padding-left: 10px;
`;

export const DataText = styled.Text`
  font-size: 12px;
  color: #808080;
  margin-left: 4px;
`;