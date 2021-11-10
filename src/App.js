import './App.css'
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
} from './pages'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <Navigation />
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
        <Route path='/slack' exact>
          <Slack />
        </Route>
        <Route path='/email' exact>
          <Email />
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
