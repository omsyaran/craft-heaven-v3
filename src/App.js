import Login from "./components/LogIn/Login";
import Signup from "./components/SignUp/Signup";
import SellerLogin from "./components/SellerLogIn/SellerLogIn";
import SellerSignup from "./components/SellerSignUp/SellerSignup";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarDashboard from "./components/Seller/NavbarDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SellerSignup} />
          <Route path="/login" component={NavbarDashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
