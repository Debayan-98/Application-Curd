import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Adduser from './Component/Adduser'
import Alluser from './Component/Alluser';
import Notfound from './Component/Notfound';
import Edituser from './Component/Edituser';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-user" element={<Adduser />} />
          <Route exact path="/all-user" element={<Alluser />} />
          <Route exact path="/edit-user/:id" element={<Edituser />} />
          <Route path="*" element={<Notfound />} />

        </Routes>

      </Router>

    </>
  );
}

export default App;
