import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import WritePost from './pages/WritePost';
import MainLayout from './pages/MainLayout';
import Error from './components/Error.jsx'
function App() {

  return (
    <>
      <Router>
        <Routes >
          <Route element={<AuthPage/>} path='/' />
          <Route element={<MainLayout/>} errorElement={<Error/>}>
            <Route element={<Home/>} path='/home'/>
            <Route element={<WritePost/>} path='/writepost'/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
