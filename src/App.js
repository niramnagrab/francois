import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Home from './pages/index'
import OurCurriculum from './pages/curriculum'
import How from './pages/how'
import About from './pages/about'
import Tours from './pages/tours'
import Registration from './pages/registration'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/our-curriculum" component={OurCurriculum} />
        <Route path="/how-to" component={How} />
        <Route path="/about-us" component={About} />
        <Route path="/tours" component={Tours} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </Router>
  )
}

export default App
