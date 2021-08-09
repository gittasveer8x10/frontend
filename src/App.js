import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route  } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './css/LoginScreen.css'
import { LoginScreen } from './screens/LoginScreen';


function App() {
  return (
    <Router>
     
        <Container >
        <Route path='/' component={LoginScreen} exact/>
        </Container>
      
  </Router>
  );
}

export default App;
