
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Header from "./components/Header";
import AllOrder from "./components/AllOrder";
import MyOrder from "./components/MyOrder";
// import { Routes,Route } from 'react-router-dom'


function App() {
  return (
    <div id='body-pd'>
      <Header />
        <Routes>
          <Route path='/' element={<Content />}/>
          <Route path='/all-order' element={<AllOrder />} />
          <Route path="/my-order" element={<MyOrder />} />
        </Routes>
      
    </div>
  );
}

export default App;
