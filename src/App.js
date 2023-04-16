import './App.css';
import { Banner } from './components/Banner/banner.componet';
import Navigation from './components/Navigation/navigation.component';
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from './components/Skills/skills.component';
import { Projects } from './components/Projects/projects.component';
import { Contact } from './components/Contact/contact.component';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
