import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import About from './components/About/About'
import AllPosts from './components/Blog/AllPosts'
import OnePost from './components/Blog/OnePost'

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={AllPosts} path="/blog" exact />
        <Route component={OnePost} path="/:slug" />
      </div>
    </Router>
  )
}

export default App
