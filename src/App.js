import logo from './logo.svg'
import './App.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import {Logo} from './components/Logo'
import { SignUP } from './container/SignUP';
import Header from './components/Header'
function App() {
  return (
    <MDBContainer fluid>
      <Header />
    </MDBContainer>
  );
}

export default App;
