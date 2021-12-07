// import { Switch, Router } from "react-router-dom";
// import "./App.css";

import { Route } from "react-router-dom";

import HomePage from "./views/HomePage";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import ProjectPage from "./views/ProjectView/ProjectPage";

import "./scss/_main.scss";

function App() {
  return (
    <>
      <AppBar />
      <Container>
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
      <Footer />
    </>
  );
}

export default App;
