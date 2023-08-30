import {Route,Routes,BrowserRouter as Routers} from 'react-router-dom'
import Home from './Pages/Home';


function App() {
  return (
    <Routers>
      <Routes>
        <Route path='/'  element={<Home />} />
      </Routes>
    </Routers>
  );
}

export default App;