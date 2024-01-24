import './App.css';
import Header from '../src/components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="main">
      <Header></Header>

      <Router>
        <Routes>
          <Route>
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
