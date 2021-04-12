import Header from './components/Header';
import Footer from './components/Footer';
import { Container, Button } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Cities from './screens/Cities';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/signup' component={SignUp} exact />
        <Route path='/selectcity' component={Cities} exact />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
