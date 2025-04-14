import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './src/Telas/TelaInicial';
import TelaProdutos from './src/Telas/TelaProdutos';
import TelaDetalhes from './src/Telas/TelaDetalhes';
import TelaInformacoes from './src/Telas/TelaInformacoes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={TelaInicial} />
        <Stack.Screen name="Produtos" component={TelaProdutos} />
        <Stack.Screen name="Detalhes" component={TelaDetalhes} />
        <Stack.Screen name="Informacoes" component={TelaInformacoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
