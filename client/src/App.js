import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Create from './Create';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/create' element={ <Create/>}></Route>
        <Route path='/create/posts' element={ <Post/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
