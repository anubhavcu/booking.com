import Header from './components/Header';
import Footer from './components/Footer';
import { Container, Button } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Cities from './screens/Cities';
import CityRooms from './screens/CityRooms';
import RoomInfo from './components/RoomInfo';
import PaymentScreen from './screens/PaymentScreen';
import PaymentWindow from './screens/PaymentWindow';
import Success from './components/Success';
import Profile from './screens/Profile';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/selectcity' component={Cities} exact />
        <Route path='/selectcity/:id' component={CityRooms} exact />
        <Route path='/room/:city/:id' component={RoomInfo} />
        <Route path='/paymentwindow' component={PaymentWindow} />
        <Route path='/success' component={Success} />
        <Route path='/profile' component={Profile} />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
