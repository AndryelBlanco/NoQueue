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
    description: 'Esses fones de ouvido são focados no conforto: As almofadas de ouvido luxuosas e o arco de cabeça, ambos em couro sintético, são leves e feitos para evitar a pressão nos seus ouvidos. As almofadas de ouvido giram até 90 graus por conveniência. Ajuste o volume de forma conveniente e rápida em qualquer plataforma com o botão de volume posicionado no próprio headset. Seus headphones funcionam com seu PC, Mac ou com consoles de jogos, incluindo PlayStation 4™, Xbox One™, Nintendo Switch™ e dispositivos móveis via cabo de 3,5 mm.',
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
    description: 'Um trem expresso direto para o centro da ação está chegando. O notebook gamer Acer Aspire Nitro 5 é a nova geração, com uma configuração que não treme para os jogos mais pesados. Embarque agora e prepare se para a potência máxima. A super placa de vídeo NVIDIA GeForce GTX 1650 com 4 GB de memória dedicada GDDR6 traz a performance que você precisa para surpreender seus adversários e jogar com alto nível de realismo. Se é poder que você quer para chegar mais rápido ao level avançado, conte com o desempenho do Processador Intel Core i5 10300H Quad Core de 10ª geração, além dos 8 GB de memória tipo DDR4, expansível até 32 GB. O Aspire Nitro 5 vem equipado com o sistema operacional Windows 11, entregando os mais diversos recursos para que seus momentos de jogos e entretenimento sejam ainda mais emocionantes e desafiadores',
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
    description: 'Sobre o Produto Mesa Kuadra Office 150X60X75cm Amadeirado / Est.Preta Descrição do Produto: A Mesa Diretor KUME6150 tem montagem simples e versátil, podendo ser utilizada em diversas composições com outros móveis. A Linha Kuadra tem seu design com inspiração no estilo industrial, que remete muito a decoração usada nos Lofts das grandes metrópoles nos anos 60 e 70. Harmonizando o metal e os tons de madeira, foram projetados móveis versáteis e com estilo, que podem compor ambientes flexíveis cheios de personalidade, perfeitos para você decorar sua casa ou seu trabalho, tendo um resultado que caminha do estilo rústico ao moderno. Itens Inclusos: 1 Mesa Dimensões dos Produtos: Mesa Kuadra Office 150X60X75cm Amadeirado / Est.Preta: 150 x 60 x 75 cm Informações Logísticas (Comp. X Prof. X Alt.): Vol.01: 155 x 64,5 x 7 cm. Peso: 17,534 Kg Peso Total: 17,534 Kg Observações: Não acompanha acessórios decorativos. Imagens meramente ilustrativas.',
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
    title: 'IphoneXR',
    price:'2000',
    description: 'O Apple iPhone XR é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.1 polegadas com uma resolução de 1792x828 pixels que não é das mais elevadas. As funcionalidades oferecidas pelo Apple iPhone XR são muitas e inovadoras. Começando pelo LTE 4G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 256 GB mas sem a possibilidade de expansão. Respeitável a câmera de 12 megapixels que permite ao Apple iPhone XR tirar fotos com uma resolução de 4608x2592 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. Muito fino, 8.3 milímetros, o que torna o Apple iPhone XR realmente interessante.',
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
    title: 'Jogo de Panelas Tramontina',
    price:'800',
    description: 'Quem busca qualidade e funcionalidade para sua cozinha, precisa contar com o jogo de panelas Tramontina Mônaco em alumínio com revestimento interno e externo em Starflon Premium preto 05 peças. Essenciais para um dia a dia na cozinha muito mais prático, as peças do jogo são produzidas em alumínio e contam com revestimento em antiaderente Starflon Premium. Devido as essas características, as peças cozinham os alimentos de maneira rápida e uniforme, evitam que eles grudem na superfície e são superfáceis de limpar. As panelas e as caçarolas vem com tampa de vidro temperado com bordas de aço inox e saídas de vapor que auxilia no preparo das receitas e facilita a visualização. Os cabos, alças e pegadores são metálicos com proteção em silicone e não aquecem, garantindo assim, um manuseio muito mais seguro. Além de todas essas características, as peças ainda podem ir à máquina de lavar louças, otimizando suas tarefas na cozinha!',
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
    title: 'Jbl Endurance Run Bluetooth',
    price:'250',
    description: 'Os resultados importam, e quando você tem os fones de ouvido perfeitos, não há nada entre você e o seu exercício. Com reprodução de músicas sem fio, os Endurance RUNBT da JBL garantem a motivação necessária para superar seus limites do potente som da JBL. Com seu mecanismo FlipHook™ , eles se adaptam ao encaixe dentro do ouvido e atrás da orelha para maior conveniência. A combinação confortável de ponteiras de ouvido FlexSoft™ e tecnologia TwistLock™ significa que esses fones têm a garantia de nunca machucar ou cair. Graças à resistência a suor IPX5, os fones de ouvido Endurance RUNBT da JBL garantem seu melhor desempenho a todo momento para que nem o suor nem a chuva impeçam seus exercícios. Com reprodução de seis horas, os Endurance RUNBT da JBL incluem um microfone integrado e controlador remoto para controle de som e chamadas de viva-voz. As ponteiras magnéticas garantem o encaixe prático dos Endurance RUNBT em volta de seu pescoço quando não estão sendo usados. Aproveite seus exercícios!',
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