import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route  } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import RegisterScreen from './screens/RegisterScreen'


function App() {
  return (
    <Router>
      <main className="py-3">
        <Container>
        <Route path='/' component={RegisterScreen} exact/>
        </Container>
      </main>
  </Router>
  );
}

export default App;