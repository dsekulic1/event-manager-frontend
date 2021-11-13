import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.light.css'
import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.light.css'
import './App.css'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '@babel/polyfill'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  Home,
  Error,
  Register,
  Login,
  Verify,
  Dashboard,
  ProtectedRoute,
  Slack,
  Email,
  Calendar,
  ForgotPassword,
  ResetPassword,
} from './pages'
import Navigation from './components/Navigation'
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <ProtectedRoute path='/dashboard' exact>
          <Dashboard />
        </ProtectedRoute>
        <ProtectedRoute path='/slack' exact>
          <Slack />
        </ProtectedRoute>
        <ProtectedRoute path='/email' exact>
          <Email />
        </ProtectedRoute>
        <ProtectedRoute path='/calendar' exact>
          <Calendar />
        </ProtectedRoute>
        <Route path='/user/reset-password/:token' exact>
          <ResetPassword />
        </Route>
        <Route path='/forgot-password' exact>
          <ForgotPassword />
        </Route>
        <Route path='/user/verify-email' exact>
          <Verify />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
