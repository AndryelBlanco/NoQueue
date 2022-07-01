import styled from 'styled-components';


export const CheckoutView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70%;
  background-color: #fff;

  margin-top: 10%;
  padding: 10%;
`;

export const ProductImageView = styled.Image`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const ProductImageContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductPriceInformations = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  width: 100%;
`;

export const ProductTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const ProductPrice =  styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: #0057FF;
`;