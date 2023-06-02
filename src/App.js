import logo from './logo.svg'
import './App.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import {Logo} from './components/Logo'
import { SignUP } from './container/SignUP';
import {ShopesList} from './components/ShopesList'
function App() {
  return (
    <MDBContainer fluid>
      <ShopesList />
    </MDBContainer>

  );
}

export default App;
