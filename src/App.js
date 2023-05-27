import logo from './logo.svg'
import './App.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import Footer from './components/Footer'
function App() {
  return (
      <Layout>
      <Routes>
           <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUP />} />
           <Route path="/" element={<Layout />}>
                <Route index element={<Landing />} />
                <Route path="/shopes" element={<Shopes />} />
                <Route path="/request" element={<Request />} />
            </Route>
            <Route path="*" element={<>404 page not found</>} />
        </Routes>
    </Layout>
  );
}

export default App;
