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
  border-radius: 12px;
`;

export const Title = styled.Text `
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color:#fff;

  margin-left: 22px;
  padding: 10px;
`;

export const PageBalance = styled.View `
  display: flex;
  width: 95%;
  height:107px;
  left: 10px;
  top: 80pX;
  
  background: #FFF;
  border-radius: 12px;
`;

export const Balance = styled.Text `
  display: flex;
  width: 139px;
  height: 22px;
  left: 30px;
  top: 20px;

  font-size: 18px;
  
`;
