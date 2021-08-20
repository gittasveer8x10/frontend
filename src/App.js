import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <Router>
      <Route path="/register" component={RegisterScreen} exact />
    </Router>
  );
}

export default App;
