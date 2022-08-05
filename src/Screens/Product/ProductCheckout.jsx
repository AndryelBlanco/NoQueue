import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, } from 'react-native';
import { ButtonCheckout, CheckoutView, DefaultText, GoBackButton, ProductDescription, ProductImageContainer, ProductImageView, ProductPrice, ProductPriceInformations, ProductTitle, SliderView } from './Styled_ProductCheckout';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Icon from 'react-native-vector-icons/Octicons';
import { useIsFocused } from '@react-navigation/native';



 const arrayOfObjects = [
  {
    title: 'Logitech G890',
    price:'500',
    description: 'Fone de ouvido',
    images: [
      {
       image: require('../../images/products/Headset/headset1.png'),
      },
     {
       image:require('../../images/products/Headset/headset2.png'),
     },
     {
      image:require('../../images/products/Headset/headset3.png'),
      },
     ]
  },
  
  {
    title: 'Nitro 5',
    price:'4500',
    description: 'Notebook',
    images: [
      {
       image: require('../../images/products/Nitro5/nitro1.png'),
      },
     {
       image:require('../../images/products/Nitro5/nitro2.png'),
     },
     {
      image:require('../../images/products/Nitro5/nitro3.png'),
      },
     ]
  },

  {
    title: 'Escrivaninha',
    price:'300',
    description: 'Mesa escrivaninha',
    images: [
      {
       image: require('../../images/products/Mesa/mesa1.png'),
      },
     {
       image:require('../../images/products/Mesa/mesa2.png'),
     },
     {
      image:require('../../images/products/Mesa/mesa3.png'),
      },
     ]
  },

  {
    title: 'Celular',
    price:'1350',
    description: 'Smartphone Samsung Galaxy A23 128GB Preto 4G - Octa-Core 4GB RAM 6,6” Câm Quádrupla + Selfie 8MP',
    images: [
      {
       image: require('../../images/products/Celular/celular1.png'),
      },
     {
      image: require('../../images/products/Celular/celular2.png'),
     },
     {
      image: require('../../images/products/Celular/celular3.png'),
      },
     ]
  },

  {
    title: 'jogo de panelas',
    price:'800',
    description: 'Jogo de Panelas Tramontina Mônaco em Alumínio com Revestimento Interno e Externo em Starflon Premium Preto 05 Peças',
    images: [
      {
       image: require('../../images/products/Panelas/panela1.png'),
      },
     {
       image:require('../../images/products/Panelas/panela2.png'),
     },
     {
      image:require('../../images/products/Panelas/panela3.png'),
      },
     ]
  },

  {
    title: 'Fone de ouvido para correr',
    price:'250',
    description: 'Fone de ouvido Jbl Endurance Run Bluetooth',
    images: [
      {
       image: require('../../images/products/Fone/fone1.png'),
      },
     {
       image:require('../../images/products/Fone/fone2.png'),
     },
     {
      image:require('../../images/products/Fone/fone3.png'),
      },
     ]
  },
 ]

 

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    marginTop: 20,
  },
});

const ProductCheckout = ({ navigation, route }) => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)

  const isFocused = useIsFocused();

  const { randomNumber } = route.params;



  function handleGoBack(){
    navigation.navigate('Scanner');    
  }

  return (
      <CheckoutView>
        <ScrollView contentContainerStyle={styles.contentContainer}  showsVerticalScrollIndicator={false}> 
        <GoBackButton activeOpacity={0.765} onPress={handleGoBack}> 
          <Icon name='arrow-left' size={18} color="#fff" />
        </GoBackButton>
          { isFocused && randomNumber != null ?
            <>
              <SliderView>
                  <FlatListSlider 
                    data={arrayOfObjects[randomNumber].images} 
                    height={380}
                    width={320}
                    imageKey={'image'}
                    local
                    autoscroll={false}
                    timer={5000}
                    onPress={() => console.log('ok')}
                  />
              </SliderView>
              <ProductPriceInformations>
                <ProductTitle>{arrayOfObjects[randomNumber].title}</ProductTitle> 
                <ProductPrice>R$ {arrayOfObjects[randomNumber].price}</ProductPrice>
                <ProductDescription>{arrayOfObjects[randomNumber].description}</ProductDescription> 
              </ProductPriceInformations>
            </>
          :
          null 
        }
        </ScrollView> 
          <ButtonCheckout activeOpacity={0.765}> 
            <DefaultText>
              Fazer Checkout
            </DefaultText>
            <Icon name='arrow-right' size={18} color="#fff" />
          </ButtonCheckout>
          
      </CheckoutView>
  )
}


export default ProductCheckout