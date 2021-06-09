import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import List from "./components/List";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import {Link} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Link to={"/"}><img src={logo} className="App-logo" alt="logo" /></Link>
      <Switch>
        <Route exact path={"/"}>
          <List/>
        </Route>
        <Route exact path={"/add"}>
          <AddRecipe/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
