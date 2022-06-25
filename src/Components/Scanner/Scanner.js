import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScannerBarAnimated, ScannerMockArea, ScannerView } from './Styled_Scanner';
import * as Animatable from "react-native-animatable";
import RBSheet from 'react-native-raw-bottom-sheet';
import { useIsFocused } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-web';



function Scanner({ setData, handleChange }) {

  const refRBSheet = useRef();
  const isFocused = useIsFocused();


  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(true);
  const [scannedData, setScannedData] = useState(null) 

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  

  return (
    <ScannerView>
      {isFocused ? (
        <Camera
          onBarCodeScanned={() => handleChange()}
          style={StyleSheet.absoluteFill} 
        />
      ):
        null
      }
      <ScannerMockArea  source={require('./MockScan.png')} style={{opacity: .6}}/>
      <Animatable.View  animation="slideInDown" delay={500} iterationCount="infinite" direction="alternate" style={{ display: 'flex', alignItems: 'center'}}>
        <ScannerBarAnimated>
        </ScannerBarAnimated>
      </Animatable.View>
      {/* <Text>Scanned Datas: {scannedData != null ? scannedData : 'no data scanned!'}</Text>
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
    </ScannerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88efdd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default Scanner