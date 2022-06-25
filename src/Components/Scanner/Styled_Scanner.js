import styled, { keyframes } from 'styled-components';



export const ScannerView = styled.View`
  align-items: center;

  justify-content: center;

  width: 100%;
  height: 100%;
  position: relative;
  /* background-color: #EEEEEE; */
`;

export const ScannerBarAnimated = styled.View`
  display: flex;
  width: 220px;
  height: 8px;
  border-radius: 6px;
  opacity: .6;

  background-color: #fff;
  position: absolute;
`;


export const ScannerMockArea = styled.Image`
  display: flex;

  width: 350px;
  height: 350px;
  
  position: absolute;

 
`;