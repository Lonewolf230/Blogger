import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import WritePost from './pages/WritePost';
import MainLayout from './pages/MainLayout';
import Error from './components/Error.jsx'
import EditProfile from './pages/EditProfile.jsx';
import Notifications from './pages/Notifications.jsx';
function App() {

  return (
    <>
      <Router>
        <Routes >
          <Route element={<AuthPage/>} path='/' />
          <Route element={<MainLayout/>} errorElement={<Error/>}>
            <Route element={<Home/>} path='/home'/>
            <Route element={<WritePost/>} path='/writepost'/>
            <Route element={<EditProfile/>} path='/profile' />
            <Route element={<Notifications/>} path='/notifications'/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
