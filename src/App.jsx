import React, { useContext, useState } from 'react';  // <-- Add useContext here
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext'; // Your AuthContext
import Navbar from './Navbar';
import Hero from './Hero';
import Hero3 from './Hero3';
import ProductList from './Component/ProductList';
import ProductForm from './Component/ProductForm';
import Landing from './pages/Landing';
import About from './About';
import Skills from './Skills';
import Homes from './pages/Homes';
import Login from './pages/Login';
import Register from './pages/Register';
import Typewriter from './pages/Typewriter';

const Home = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <Hero />
      <Hero3 />
      <ProductList />
      <ProductForm />
      <Landing />
      <Typewriter text="Welcome to my awesome website!" speed={150} />

      {show && (
        <div className="box bg-blue-500 w-fit text-white p-2 rounded-lg mt-10 ml-10 h-32 text-sm flex-col items-center justify-center gap-y-2">
          <h1>Bikash</h1>
          <h1>A.I.</h1>
          <p>hdjhagh</p>
        </div>
      )}
      <button
        className="cursor-pointer bg-blue-500 text-white ml-10 mt-4 p-2 text-sm"
        onClick={() => setShow(!show)}
      >
        {show ? 'Hide Box' : 'Show Box'}
      </button>
    </div>
  );
};

function App() {
  const { user } = useContext(AuthContext); // This is called before AuthProvider wraps it

  return (
    <AuthProvider> {/* AuthProvider only wraps the content inside */}
      <Router>
        {user && <Navbar />}
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/about" element={user ? <About /> : <Navigate to="/login" />} />
          <Route path="/skills" element={user ? <Skills /> : <Navigate to="/login" />} />
          <Route path="/homes" element={user ? <Homes /> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user ? <Register /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
