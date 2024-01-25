import './App.css';
import Header from '../src/components/Header'
import Body from '../src/components/Body'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="main">
      <Header></Header>
      <Body></Body>
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
