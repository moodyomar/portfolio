import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import './App.css';

function App() {
  return (
    <Router>
<header>
<Route exact path="/" component={Navbar} />
<Hero />
</header>

<main>
<Switch>

</Switch>
</main>

<footer>

</footer>

</Router>
  );
}

export default App;
