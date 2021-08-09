//Complementary-Functions
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//Screen-Imports
import {HomeScreen} from './screens/HomeScreen';
function App() {
  return (
    <>
    <Router>
      
      
      <Route component={HomeScreen} exactpath="/" />
       
      
      
    </Router>
    </>

  );
}

export default App;
