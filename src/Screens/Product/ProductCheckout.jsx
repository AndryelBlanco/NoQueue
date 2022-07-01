import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { CheckoutView, ProductImageContainer, ProductImageView, ProductPrice, ProductPriceInformations, ProductTitle } from './Styled_ProductCheckout';


export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


const data = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/8/981-0007556.jpg'
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/8/981-0007554.jpg',
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/8/981-000755.jpg',
  },
];

const CarouselCardItem = ({ item, index }) => {
  return (
    <ProductImageContainer key={index}>
      <ProductImageView
        source={{ uri: item.imgUrl }}
      />
    </ProductImageContainer>
  )
}

const ProductCheckout = () => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)


  return (
    <CheckoutView>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={data}
        activeSlideOffset={10}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#1582ff'
        }}
        inactiveDotOpacity={0.3}
        inactiveDotScale={0.5}
        tappableDots={true}
      />
      <ProductPriceInformations>
        <ProductTitle>Logitech G890</ProductTitle> 
        <ProductPrice>R$ 599,99</ProductPrice> 
      </ProductPriceInformations>
    </CheckoutView>
  )
}



export default ProductCheckout