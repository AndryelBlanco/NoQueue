import styled from 'styled-components';

export const ItemContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #FFF;
  margin: 8px;
  padding: 20px;
  

  border: 1px solid #DCDCDC;
  border-radius: 12px;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StoreTitle =  styled.Text`
  font-size: 18px;
  margin-left: 8px;
`;

export const StoreAdress = styled.Text`
  font-size: 14px;
  margin-top: 8px;
  margin-left: 6px;
`;

