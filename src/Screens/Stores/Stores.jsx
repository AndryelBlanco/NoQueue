import React, { useContext, useRef, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View, SafeAreaView, StyleSheet, Image } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import StoreItem from '../../Components/StoreItem/StoreItem';
import { StoreSubTextModal, StoreInfoContainer, StoreLogo, StoreModalContainer, StoreTitleModal, SubInfo } from './Styled_Stores';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PageTitle from '../../Components/PageTitle/PageTitle';


const Stores = () => {

  const refRBSheet = useRef();

  const [storeSelected, setStoreSelected] = useState(null);


  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Beagle Store 01',
      logo: 'https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Beagle Store 02',
      logo: 'https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png'

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Beagle Store 03',
      logo: 'https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png'

    },
    {
      id: Math.random(),
      title: 'Beagle Store 04',
      logo: 'https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png'

    },
    {
      id: Math.random(),
      title: 'Lojas Americanas 01',
      logo: 'https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png'

    },
    {
      id: Math.random(),
      title: 'Lojas Americanas 02',
      logo: 'https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png'

    },
    {
      id: Math.random(),
      title: 'Lojas Americanas 03',
      logo: 'https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png'

    },
    {
      id: Math.random(),
      title: 'Casas Bahia Nova esperança',
      logo: 'https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png'

    },
    {
      id: Math.random(),
      title: 'Magazine Luiza 02',
      logo: 'https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png'

    },
    {
      id: Math.random(),
      title: 'Target Store 09',
      logo: 'https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png'

    },
    {
      id: Math.random(),
      title: 'Target Store 20',
      logo: 'https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png'

    },
    {
      id: Math.random(),
      title: 'Mercado Tambara',
      logo: 'https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png'

    },
    {
      id: Math.random(),
      title: 'A casa do Gaúcho',
      logo: 'https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png'

    },
    {
      id: Math.random(),
      title: 'FIBRA - Produtos Naturais',
      logo: 'https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png'

    },
  ];

  function OpenBottomModal(){
    refRBSheet.current.open()
  }

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <StoreItem item={item} functionPress={OpenBottomModal} setStoreSelected={setStoreSelected}/>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <PageTitle text='Lojas disponíveis' icon='store'/>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        {storeSelected !== null &&
          <StoreModalContainer>
            <StoreLogo
              source={{
                uri: storeSelected.logo,
              }}
            />
            <StoreInfoContainer>
              <StoreTitleModal>{storeSelected.title}</StoreTitleModal>
              <SubInfo>
                <MaterialCommunityIcons name={'map-marker-outline'} color={'#898989'} />
                <StoreSubTextModal>Av. Ibicuí 581</StoreSubTextModal>
              </SubInfo>
              <SubInfo>
                <MaterialCommunityIcons name={'clock-outline'} color={'#898989'} />
                <StoreSubTextModal>08:00h - 19:30h</StoreSubTextModal>
              </SubInfo>
              <SubInfo>
                <MaterialCommunityIcons name={'phone'} color={'#898989'} />
                <StoreSubTextModal>99 9 99999999</StoreSubTextModal>
              </SubInfo>
            </StoreInfoContainer>
          </StoreModalContainer>
        }
      </RBSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  item: {
    backgroundColor: '#EEEEEE',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  teste: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});



export default Stores