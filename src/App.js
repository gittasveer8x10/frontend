import 'bootstrap/dist/css/bootstrap.min.css';
import './css/LoginScreen.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from './screens/LoginScreen';

function App() {
  return (
    <>
      <Router>
      <Route path="/login" component={LoginScreen} />
      <Route component={HomeScreen} path="/" exact/>
      </Router>
    </>
  );
}

export default App;
