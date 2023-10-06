import './App.css';
//import F1 from './components/F1'
import Nav from './components/Nav';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {HashRouter, Routes, Route} from "react-router-dom";
import { About, Blog, Home } from './components/F2';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      {/*<F1></F1>*/}  
      {/* url/#/about for getting about*/}
      <HashRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;