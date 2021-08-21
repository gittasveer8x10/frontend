import "bootstrap/dist/css/bootstrap.min.css";

//Complementary-Functions
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Screen-Imports

import { HomeScreen } from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
function App() {
  return (
    <>
      <Router>
        <Route component={HomeScreen} path="/" exact />
        <Route path="/register" component={RegisterScreen} />
      </Router>
    </>
  );
}

export default App;
