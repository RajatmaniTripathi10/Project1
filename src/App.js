import logo from './logo.svg';
import './App.css';
import { Routes,Route} from 'react-router-dom';
import UserDetails from './Components/Base/User';
import BillingAddress from './Components/Billing/Billing';
import ShippingAddress from './Components/Shipping/Shipping';

function App() {
  return (
    <div>
  <Routes>
      <Route path="/" element={<UserDetails></UserDetails>}/>
      <Route path='/shipping' element={<ShippingAddress></ShippingAddress>}/>
      <Route path='/billing' element={<BillingAddress></BillingAddress>}/>
    </Routes> 
    
    
  
    </div>
   
  );
}

export default App;
