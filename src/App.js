import logo from './logo.svg'
import './App.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import {Comment}from './components/Comment'
function App() {
  return (
    <MDBContainer fluid>
      <Comment />
    </MDBContainer>
  );
}

export default App;
