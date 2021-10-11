import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NoteState from "./context/Notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";
import { useContext, useEffect } from "react";
import NoteContext from "./context/Notes/NoteContext";

function App() {
  const context = useContext(NoteContext);
  const {showAlert} = context;
  useEffect(() => {
    showAlert("Hello", "success");
  }, [])
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div style={{height: '50px'}}>
            <Alert alert={alert}/>
          </div>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
};

export default App;
