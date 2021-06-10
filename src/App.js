import logo from './logo.svg';
import './App.css';
import { Route, Switch, withRouter, BrowserRouter } from "react-router-dom";
import List from "./components/List";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import {Link} from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to={"/"}><img src={logo} className="App-logo" alt="logo" /></Link>
        <Switch>
          {props.children}
          <Route exact path={"/"}>
            <List/>
          </Route>
          
          <Route path={"/add"} component={withRouter(AddRecipe)}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
