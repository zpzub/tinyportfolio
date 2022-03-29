import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import { Flex } from '@chakra-ui/react';
import Cv from './Components/Cv';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Flex justifyContent='left' h='99vh' alignItems='center' p='40px' flexDirection='column'>
      <Hero />
      <Cv />
      <Skills />
      <Projects />
      <Contact />
      </Flex>
      
    </div>
  );
}

export default App;
