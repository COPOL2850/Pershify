import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./permanents/components/header/header";
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

        </Routes>
      </Router>
    </div>
  )
}

export default App;
