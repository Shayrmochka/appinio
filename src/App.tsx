import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/nav-bar/NavBar';
import Survey from './pages/survey/Survey';
import Footer from './components/footer/Footer';
import UiKit from './ui-kit/UiKit';
import './App.css';
import './normalize.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path="/" exact>
          <NavBar />

          <div className="main">
            <Survey />
            <Footer />
          </div>
        </Route>
        <Route path="/ui-kit" exact>
          <UiKit />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
