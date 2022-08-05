import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, } from 'react-native';
import { ButtonCheckout, CheckoutView, DefaultText, GoBackButton, ProductDescription, ProductImageContainer, ProductImageView, ProductPrice, ProductPriceInformations, ProductTitle, SliderView } from './Styled_ProductCheckout';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Icon from 'react-native-vector-icons/Octicons';

const images = [
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
       image: require('../../images/products/Nitro5/notebook1.jpg'),
      },
     {
       image:require('../../images/products/Nitro5/notebook2.jpg'),
     },
     {
      image:require('../../images/products/Nitro5/notebook3.jpg'),
      },
     ]
  },

  {
    title: 'Escrivaninha',
    price:'300',
    description: 'Mesa escrivaninha',
    images: [
      {
       image: require('../../images/products/Mesa/mesa1.jpg'),
      },
     {
       image:require('../../images/products/Mesa/mesa2.jpg'),
     },
     {
      image:require('../../images/products/Mesa/mesa3.jpg'),
      },
     ]
  },

  {
    title: 'Celular',
    price:'1350',
    description: 'Smartphone Samsung Galaxy A23 128GB Preto 4G - Octa-Core 4GB RAM 6,6” Câm Quádrupla + Selfie 8MP',
    images: [
      {
       image: require('../../images/products/Celular/celular1.jpg'),
      },
     {
      image: require('../../images/products/Celular/celular2.jpg'),
     },
     {
      image: require('../../images/products/Celular/celular3.jpg'),
      },
     ]
  },

  {
    title: 'jogo de panelas',
    price:'800',
    description: 'Jogo de Panelas Tramontina Mônaco em Alumínio com Revestimento Interno e Externo em Starflon Premium Preto 05 Peças',
    images: [
      {
       image: require('../../images/products/Panelas/panela1.jpg'),
      },
     {
       image:require('../../images/products/Panelas/panela2.jpg'),
     },
     {
      image:require('../../images/products/Panelas/panela3.jpg'),
      },
     ]
  },

  {
    title: 'Fone de ouvido para correr',
    price:'250',
    description: 'Fone de ouvido Jbl Endurance Run Bluetooth',
    images: [
      {
       image: require('../../images/products/Fone/fone1.jpg'),
      },
     {
       image:require('../../images/products/Fone/fone2.jpg'),
     },
     {
      image:require('../../images/products/Fone/fone3.jpg'),
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

const ProductCheckout = ({ navigation }) => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)
  const [randomNumber, setRandomNumber] = React.useState(0);

  useEffect(() => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    const teste = getRandomInt(0, 5);
    console.log('TESTE', teste)
    setRandomNumber(teste);
  }, [])

  function handleGoBack(){
    navigation.navigate('Scanner');    
  }

  return (
      <CheckoutView>
        <ScrollView contentContainerStyle={styles.contentContainer}  showsVerticalScrollIndicator={false}> 
        <GoBackButton activeOpacity={0.765} onPress={handleGoBack}> 
          <Icon name='arrow-left' size={18} color="#fff" />
        </GoBackButton>
          <SliderView>
            <FlatListSlider 
              data={images[randomNumber]} 
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
            <ProductTitle>Logitech G890</ProductTitle> 
            <ProductPrice>R$ 599,99</ProductPrice>
            <ProductDescription>
              Versátil: O G435 é o primeiro headset gamer com conexão sem fio LIGHTSPEED e Bluetooth de baixa latência, oferecendo mais liberdade de jogo no PC, celular e dispositivos de jogos PlayStation.
              Leve: Com uma construção leve, este headset gamer sem fio pesa apenas 165 g, tornando-o confortável de usar durante o dia todo.
              Qualidade de voz superior: Seja ouvido em alto e bom som graças aos microfones integrados de formação de feixe duplo que eliminam a necessidade de um braço de microfone e reduzem o ruído de fundo.
              Som envolvente: Este headset moderno e colorido oferece áudio de alta fidelidade balanceado com drivers de 40 mm, compatibilidade com Dolby Atmos e Windows Sonic para uma experiência de som envolvente.
              Bateria de longa duração: Não precVersátil: O G435 é o primeiro headset gamer com conexão sem fio LIGHTSPEED e Bluetooth de baixa latência, oferecendo mais liberdade de jogo no PC, celular e dispositivos de jogos PlayStation.
              Leve: Com uma construção leve, este headset gamer sem fio pesa apenas 165 g, tornando-o confortável de usar durante o dia todo.
              Qualidade de voz superior: Seja ouvido em alto e bom som graças aos microfones integrados de formação de feixe duplo que eliminam a necessidade de um braço de microfone e reduzem o ruído de fundo.
              Som envolvente: Este headset moderno e colorido oferece áudio de alta fidelidade balanceado com drivers de 40 mm, compatibilidade com Dolby Atmos e Windows Sonic para uma experiência de som envolvente.
              Bateria de longa duração: Não precisa interromper os jogos para recarregar graças à bateria de até 18h do G435, permitindo que você continue jogando, conversando com amigos e ouvindo música.  
            </ProductDescription> 
          </ProductPriceInformations>
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