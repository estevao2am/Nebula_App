import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text';
import { theme } from './src/theme/theme';
import { ThemeProvider } from '@shopify/restyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge">Nebula App</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
