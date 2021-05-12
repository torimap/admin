import "./App.css";
import styled from "styled-components";
import Posts from "./Pages/Posts";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={Posts} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;


const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
