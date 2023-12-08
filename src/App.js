import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>

  );
}

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <Footer/>
    </div>
  );
}

export default App;
