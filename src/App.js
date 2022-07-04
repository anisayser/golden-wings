import logo from './logo.svg';
import './App.css';
import InfoHeader from './components/AllHeaders/InfoHeader/InfoHeader';
import MenuHeader from './components/AllHeaders/MenuHeader/MenuHeader';
import Home from './components/HomeItems/Home/Home';
import Footer from './components/Footer/Footer';
import {Routes, Route} from 'react-router-dom';
import BookingForm from './components/BookingForm/BookingForm';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyEvents from './components/AllEvents/MyEvents/MyEvents';
import AdminAllEvents from './components/AllEvents/AdminAllEvents/AdminAllEvents';
import AdminAllBookings from './components/AdminAllBookings/AdminAllBookings';

function App() {
  return (
    <div className="App">
      <InfoHeader></InfoHeader>
      <MenuHeader></MenuHeader>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/booking/:id' element={<PrivateRoute><BookingForm></BookingForm></PrivateRoute>}></Route>
        <Route path='/myevents' element={<PrivateRoute><MyEvents></MyEvents></PrivateRoute>}></Route>
        <Route path='/allevents' element={<PrivateRoute><AdminAllEvents></AdminAllEvents></PrivateRoute>}></Route>
        <Route path='/bookings' element={<PrivateRoute><AdminAllBookings></AdminAllBookings></PrivateRoute>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

      

      
      <Footer></Footer>

    </div>
  );
}

export default App;
