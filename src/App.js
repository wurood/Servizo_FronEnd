import logo from './logo.svg'
import './App.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import {Logo} from './components/Logo'
import { SignUP } from './container/SignUP';
import {ShopeHero}from './components/ShopeHero'
function App() {
  return (
    <MDBContainer fluid>
      <ShopeHero />
    </MDBContainer>

  );
}

export default App;
