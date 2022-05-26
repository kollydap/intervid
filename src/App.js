import './App.css';
import About from './components/About';
import CreateAccount from './components/CreateAccount';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <CreateAccount />
      <Faq /> 
      <Footer />
    </div>
  );
}

export default App;
