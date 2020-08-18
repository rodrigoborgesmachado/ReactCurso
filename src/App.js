import React from 'react';
import { Text, View, SafeAreaView, Platform } from 'react-native';
import { styles } from '../styles/style';
// import TopBar from './components/topBar';
// import Max from './components/minmax';
// import Aleatorio from './components/aleatorio';
// import Botao from './components/botao';
// import Contador from './components/contador'
// import Pai from './components/direta/pai'
// import Pai from './components/indireta/pai'
// import Contador from './components/Contador/ContadorV2'
// import ParImpar from './components/ParImpar';
// import Familia from './components/relacao/familia';
// import Membro from './components/relacao/membro';
// import UsuarioLogado from './UsuarioLogado';
// import ListaProdutos from './components/produtos/listaProdutos'
// import ListaProdutos from './components/produtos/listaProdutosV2.js'
import DigiteSeuNome from './components/digiteSeuNome'

function App() {
  let jsx = null
  jsx =
    <SafeAreaView style={styles.container}>
      <DigiteSeuNome />
      {/* <Contador />
      <ListaProdutos />
      <UsuarioLogado usuario={{ nome: 'Rodrigo', email: 'rodrigo' }} />
      <UsuarioLogado usuario={{ email: 'rodrigo' }} />
      <UsuarioLogado usuario={{ nome: 'Rodrigo', email: 'rodrigo' }} />
      <Familia>
        <Membro nome='Rodrigo' sobrenome='Machado' />
        <Membro nome='Lucy' sobrenome='Machado' />
      </Familia>
      <Familia>
        <Membro nome='Andressa' sobrenome='Machado' />
        <Membro nome='Lucy' sobrenome='Machado' />
      </Familia>
      <ParImpar num={4} />
      <Pai /> */}
    </SafeAreaView>

  // if (Platform.OS === 'android') {
  //   jsx =
  //     <SafeAreaView style={styles.container}>
  //       <Text >{1 + 1}</Text>
  //     </SafeAreaView>
  // }
  // else {
  //   jsx =
  //     <SafeAreaView style={styles.container}>
  //       <View style={styles.sectionContainer}>
  //         <Text>This is a apple app</Text>
  //       </View>
  //     </SafeAreaView>
  // }

  return jsx
}

export default App // Seta a função que vai retornar com a tela
// export default () => <Blabla></Blabla>