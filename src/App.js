
import './App.css';
import NavBar from './components/navbar/navbar';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Projects from './components/Projects/Projects';
import Contact from './components/contact/Contact';

function App() {

  return (
    <div >
      <Router>
        <NavBar />

        <Switch>

          <Route exact path="/">
            <Introduction />
          </Route>
          <Route path="/about">
         
              <About />
            
          </Route>
          <Route path="/projects">
              <Projects/>
          </Route>
          <Route path="/contact">
              <Contact/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
