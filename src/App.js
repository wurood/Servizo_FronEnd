import logo from './logo.svg'
import './App.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import {Logo} from './components/Logo'
import { SignUP } from './container/SignUP';
import {Cards}from './components/Cards'
function App() {
  return (
    <MDBContainer fluid>
      <Cards />
    </MDBContainer>
  );
}

export default App;
