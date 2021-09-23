// import { Switch, Router } from "react-router-dom";
// import "./App.css";

import { Route } from "react-router-dom";

import HomePage from "./views/HomeView";
import Container from "./components/Container";
import AppBar from "./components/AppBar";

function App() {
  return (
    <Container>
      <AppBar />
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Container>
  );
}

export default App;
