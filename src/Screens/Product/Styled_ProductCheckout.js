import styled from 'styled-components';


export const CheckoutView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: #fff;

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
  margin-top: 38px;
`;

export const ProductTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #5E5E5E;
`;

export const ProductPrice =  styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: #0057FF;
`;

export const ProductDescription = styled.Text`
  font-size: 14px;
  color: #A9A9A9;
  margin-top: 20px;
`;

export const SliderView = styled.View`
  display: flex;

  width: 100%;
  height: 38%;
  background-color: #fff;
`;

export const ButtonCheckout = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;

  background-color: #0057FF;
  border-radius: 10px;

  shadowColor: "#000";
  shadowOffset:{
  width: 0;
  height: 9;
  };
  shadowOpacity: 1;
  shadowRadius: 1;
  elevation: 10;

`;

export const DefaultText = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-right: 10px;
`;