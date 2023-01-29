import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/Banner';
import { Skills } from './components/Cv';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact'
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
