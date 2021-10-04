import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from './components/common/Navbar'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Testimonials from './components/sections/Testimonials'
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
<Projects />
<Testimonials />
</main>

<footer>

</footer>

</Router>
  );
}

export default App;
