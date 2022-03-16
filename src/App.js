import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Detail from './Detail';
import Profile from './Profile';

function App() {
  const [token, setToken] = useState('');
  const [id, setID] = useState('');

  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setToken={setToken}/>}/>
          <Route path="/detail" element={<Detail id={id} />} />
          <Route path="/dashboard" element={<Dashboard setID={setID} />} />
          <Route path='/profile' element={<Profile id={token}/>}/>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
