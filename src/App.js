import logo from './logo.svg'
import './App.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import {Logo} from './components/Logo'
import { SignUP } from './container/SignUP';
function App() {
  return (
    <MDBContainer fluid>
      <SignUP />
    </MDBContainer>
  );
}

export default App;
