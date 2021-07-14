import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          {/*<Route exact path="/users/:id" component={User} />
          <Route component={NotFound} />*/}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
