import { useSelector } from "react-redux";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import {AdminPanel} from './pages/Admin';


function App() {
/**
 * Slice lar içinde bulunan state bilgilerine ulaşmak için useSelector kullanacağız ve 
 * bu bilgiler doğrultusunda sayfaların render olmasını sağlayacağız.
 */
const isLogin  = useSelector(state => state.personel.isLogin);
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>   
          <Route path='/admin-panel' element={isLogin ? <AdminPanel /> : <Login />} />       
        </Routes>
    </BrowserRouter>
  );
}

export default App;
