import logo from './logo.svg'
import './App.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import {Logo} from './components/Logo'
import { SignUP } from './container/SignUP';
import {Description}from './components/Description'
function App() {
  return (
    <MDBContainer fluid>
      <Description />
    </MDBContainer>
  );
}

export default App;
