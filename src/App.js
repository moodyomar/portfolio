import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from "./components/pages/Home";
import AllProjects from './components/pages/AllProjects'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './App.css';

function App() {
    AOS.init({
    offset: 200,
  });
  return (
    <Router>
<header>
<Route exact path="" component={Navbar} />
</header>

<main>
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/portfolio" component={AllProjects} />
  </Switch>
</main>

<footer>
<Footer />
</footer>

</Router>
  );
}

export default App;
