import styled from 'styled-components';

export const StoreModalContainer = styled.View`
  display: flex;
  flex-direction: row;

  padding: 8px;
`;

export const StoreLogo = styled.Image`
  width: 100px;
  height: 100px;

  border-radius: 10px;
  margin-right: 8px;
`;

export const StoreTitleModal = styled.Text`
  font-size: 24px;
  font-weight: bold;

  color: #898989;
`; 

export const StoreInfoContainer = styled.View`
  display: flex;
  flex-direction: column;

`;

export const StoreSubTextModal = styled.Text`
  font-size: 12px;
  margin-left: 4px;
  color: #898989;
`; 

export const SubInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 4px;
`;