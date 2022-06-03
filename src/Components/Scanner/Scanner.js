import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react'
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { ScannerView } from './Styled_Scanner';


const { width } = Dimensions.get('window')
const qrSize = width * 0.7

function Scanner({ setData }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null) 

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <ScannerView>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFill} 
      />
      <Text>Scanned Datas: {scannedData != null ? scannedData : 'no data scanned!'}</Text>
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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