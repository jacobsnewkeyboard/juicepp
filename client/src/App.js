import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";
import Login from "./routes/Login";
import Room from "./routes/Room";
import About from "./routes/About";
import Home from "./routes/Home";


const Container = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
          <Switch>
            <Container>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/about" component={About} />
              <Route path="/room/:roomID" component={Room} />
            </Container>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
