import Home from './pages/Home/Home.jsx'
import Join from './pages/Join/Join.jsx'
import Tasks from './pages/Tasks/Tasks.jsx'
import Timeline from './pages/Timeline/Timeline.jsx'

import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

function App() {

  const classes = useStyles();

  return (
    <Router>
      <div className={classes.container}>

        <Sidebar></Sidebar>
        
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/join">
            <Join></Join>
          </Route>

          <Route path="/tasks">
            <Tasks></Tasks>
          </Route>

          <Route path="/timeline">
            <Timeline></Timeline>
          </Route>

          {/* Reroute to home page if no other matches are made above */}
          <Route path="">
            <Home></Home>
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;