import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { CheckoutView, ProductDescription, ProductImageContainer, ProductImageView, ProductPrice, ProductPriceInformations, ProductTitle, SliderView } from './Styled_ProductCheckout';
import {FlatListSlider} from 'react-native-flatlist-slider';




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


const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    marginTop: 20,
  }
});

const ProductCheckout = () => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)


  return (
   
      <CheckoutView>
            
        <ScrollView contentContainerStyle={styles.contentContainer} endFillColor='red' showsVerticalScrollIndicator={false}> 
        <SliderView>
          <FlatListSlider 
            data={images} 
            height={380}
            width={320}
            imageKey={'image'}
            local
            autoscroll={false}
            timer={5000}
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
      </CheckoutView>
  )
}


export default ProductCheckout