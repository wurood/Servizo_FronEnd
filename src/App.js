import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import {Landing} from './container/Landing'
import {Request} from './container/Request'
import {Shopes} from './container/Shopes'
import {Login} from './container/Login'
import {SignUP} from './container/SignUP'

function App() {
  return (
      <Routes>
           <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUP />} />
           <Route path="/" element={<Layout />}>
                <Route index element={<Landing />} />
                <Route path="/shopes" element={<Shopes />} />
                <Route path="/request" element={<Request />} />
            </Route>
            <Route path="*" element={<>404 page not found</>} />
        </Routes>
  );
}

export default App;
