import logo from './logo.svg'
import './App.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import {AboutUs}from './components/AboutUs'
function App() {
  return (
    <MDBContainer fluid>
      <AboutUs />
    </MDBContainer>
  );
}

export default App;
