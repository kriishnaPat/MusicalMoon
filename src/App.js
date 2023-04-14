import './App.css';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Layout>
    <Home/>
    </Layout>
    </Router>

    </>
  );
}

export default App;
