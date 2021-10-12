// import { Switch, Router } from "react-router-dom";
// import "./App.css";

import { Route } from "react-router-dom";

import HomePage from "./views/HomePage";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import ProjectPage from "./views/ProjectView/ProjectPage";

function App() {
  return (
    <Container>
      <AppBar />
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/projects">
        <ProjectPage />
      </Route>
      {/* <Route>
        <NotFoundView />
      </Route> */}
    </Container>
  );
}

export default App;
