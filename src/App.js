
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

          <Route exact path="/Portfolio-reactJS-animated-website/">
            <Introduction />
          </Route>
          <Route path="/Portfolio-reactJS-animated-website/about">
         
              <About />
            
          </Route>
          <Route path="/Portfolio-reactJS-animated-website/projects">
              <Projects/>
          </Route>
          <Route path="/Portfolio-reactJS-animated-website/contact">
              <Contact/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
