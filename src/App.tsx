import { Footer } from './components/footer';
import Kontakt from './components/contact';
import Projekte from './components/projects';
import { Über } from "./components/about"
import { Nav } from './components/nav';
import { Home } from './components/home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Über />
      <Projekte />
      <Kontakt />
      <Footer />
    </div>
  );
}

export default App;
