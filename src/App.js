import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<AddProduct/>}/>
      <Route path="/AddProduct" element={<AddProduct/>}/>
      <Route path="/ViewProduct" element={<ViewProduct/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
