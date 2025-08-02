import { Text } from './src/components/Text';
import { Screen } from './src/Screen/Screen';
import { theme } from './src/theme/theme';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Screen canGoBack title='Começamos'>
                  <Text preset="headingLarge">Nebula App</Text>

        </Screen>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
