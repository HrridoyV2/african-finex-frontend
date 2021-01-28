import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Buy1 from './Components/BuyerSection/Buy1';
import Buy2 from './Components/BuyerSection/Buy2';
import Buy3 from './Components/BuyerSection/Buy3';
import Buy4 from './Components/BuyerSection/Buy4';
import Sell1 from './Components/SellerSection/Sell1';
import Sell2 from './Components/SellerSection/Sell2';
import Sell3 from './Components/SellerSection/Sell3';
import Sell4 from './Components/SellerSection/Sell4';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createContext, useState } from "react";
import FinalPage from "./Components/FinalPage";

export const UserContext = createContext();
function App() {
  const [country, setCountry] = useState(null);
  const [buyerWallet, setBuyerWallet] = useState(null);
  const [token, setToken] = useState(null);
  const [account, setAccount] = useState(null);
  const [finalWallet, setFinalWallet] = useState(null);

  return (
    
    <UserContext.Provider value={{
      country,
      setCountry,
      buyerWallet,
      setBuyerWallet,
      token,
      setToken,
      account,
      setAccount,
      finalWallet,
      setFinalWallet
    }}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Buy1 />
          </Route>
          <Route exact path='/page2'>
            <Buy2 />
          </Route>
          <Route exact path="/page3">
            <Buy3 />
          </Route>
          <Route exact path="/page4">
            <Buy4 />
          </Route>
          <Route exact path="/sell">
            <Sell1 />
          </Route>
          <Route exact path="/sell2">
            <Sell2 />
          </Route>
          <Route exact path="/sell3">
            <Sell3 />
          </Route>
          <Route exact path="/sell4">
            <Sell4 />
          </Route>
          <Route exact path="/final-page">
            <FinalPage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    
  );
}

export default App;
