import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Characters from './Components/Characters';
import Comments from './Components/Comments';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/comments' element={<Comments />} />
      </Routes>
    
    </>
);
}

export default App;
