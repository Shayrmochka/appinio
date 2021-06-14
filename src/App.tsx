import './App.css';
import './normalize.css';
import NavBar from './components/nav-bar/NavBar';
import Survey from './pages/survey/Survey';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <NavBar />

      <div className="main">
        <Survey />
        <Footer />
      </div>
    </div>
  );
}

export default App;
