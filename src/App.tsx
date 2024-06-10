import HomePage from './components/Home/HomePage';
import { Footer } from './components/footer';
import Kontakt from './components/contact';
import Projekte from './components/projects';
import { Über } from "./components/about"

function App() {
  return (
    <div className="App">
      <HomePage />
      <Über />
      <Projekte />
      <Kontakt />
      <Footer />
    </div>
  );
}

export default App;
