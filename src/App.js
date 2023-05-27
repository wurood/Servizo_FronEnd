import logo from './logo.svg'
import './App.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import {ContactUs}from './components/ContactUs'
function App() {
  return (
    <MDBContainer fluid>
      <ContactUs />
    </MDBContainer>
  );
}

export default App;
