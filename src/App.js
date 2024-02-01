import './App.css';
import Header from '../src/components/Header'
import Body from '../src/components/Body'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="main">
      <Header/>
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Body/>}/>   
        </Routes>
      </Router>
    </div>
  );
}

export default App;
