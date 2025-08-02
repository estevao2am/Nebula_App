import { Router } from './src/routes/routes';
import { theme } from './src/theme/theme';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
           <Router/>

      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
