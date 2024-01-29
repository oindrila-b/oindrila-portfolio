
import './App.scss';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className='App'>
      <section id='home'><Home />
      
      </section>
      <section id='about'> <About /> </section>
      <section id='projects'> <Projects /> </section>
      <section id='skills'> <Skills /> </section>
      <section id='contact'> <Contact /> </section>

    </div>
  );
}

export default App;
