import logo from './logo.svg'
import './App.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import {Hero}from './components/Hero'
function App() {
  return (
    <MDBContainer fluid>
      <Hero />
    </MDBContainer>
  );
}

export default App;
