import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
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
<Route exact path="/" component={Navbar} />
<Hero />
</header>

<main>
<Skills />
</main>

<footer>

</footer>

</Router>
  );
}

export default App;
