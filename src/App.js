import NavBar from './components/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroSection from './components/HeroSection';
import { Container } from '@mui/material';




const theme = createTheme({
  palette: {
    primary: {
      main: '#ffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container>
        <HeroSection />
      </Container>
    </ThemeProvider>
  );
}

export default App;