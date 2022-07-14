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
  margin-top:32px;
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
  width: 95%;
  height: 100px;
  left: 10px;
  top: 26px;
  
  background: #FFF;
  border-radius: 10px;
`;

export const BalanceTitle = styled.Text `
  left: 28px;
  top: 18px;
  color: #787878;
  font-size: 18px;
`;

export const Balance = styled.Text `
  left: 28px;
  top: 19px;
  color: #00CD6B;
  font-size: 26px;
  
  font-weight: 400;
`;

export const History = styled.Text `
  display: flex;
  top: 60px;
  left: 18px;
  font-size: 19px;
  color: #0057FF
`;

export const ContainerHistory = styled.View `
  display: flex;
  width: 95%;
  height: 90px;
  left: 10px;
  top: 78px;
   
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
