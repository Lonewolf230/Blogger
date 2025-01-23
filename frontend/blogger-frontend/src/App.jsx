import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<AuthPage/>} path='/' />
          <Route element={<Home/>} path='/home'/>
        </Routes>
      </Router>
    </>
  )
}

export default App
