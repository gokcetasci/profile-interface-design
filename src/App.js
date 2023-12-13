import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileDetail from './components/ProfileDetail';
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import Intercom from './components/Intercom';

function App() {
  const [intercomState, setIntercomState] = useState({
    isIntercomOpen: false,
    isArrowDownVisible: false,
  });

  const handleIntercomToggle = () => {
    console.log('Toggling Intercom');
    setIntercomState((prevState) => ({
      isIntercomOpen: !prevState.isIntercomOpen,
      isArrowDownVisible: !prevState.isArrowDownVisible,
    }));
  };

  return (
    <Router>
      <div>
        <Header />
        <ProfileDetail />
        <Footer />
        <div className={`fixed bottom-24 right-7 z-40`}>
          {intercomState.isIntercomOpen && <Intercom onClose={handleIntercomToggle} />}
          <button
            onClick={handleIntercomToggle}
            className="bg-primary text-white rounded-full flex justify-center items-center w-12 h-12 hover:scale-110 transition duration-300 ease-in-out"
            style={{ position: 'fixed', bottom: '2rem', right: '1rem' }}
          >
            {intercomState.isArrowDownVisible ? (
              <IoIosArrowDown className='w-6 h-6' />
            ) : (
              <BiSolidMessageSquareDots className='w-6 h-6' />
            )}
          </button>
        </div>

        <Routes>
          <Route
            path='/'
            element={
              <>
                <ProfilePage />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}


const ProfilePage = () => {
  return (
    <div>
    </div>
  );
}

export default App;
