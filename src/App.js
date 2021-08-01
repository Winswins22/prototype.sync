import Home from './pages/Home/Home.jsx'
import Sidebar from './components/Sidebar/Sidebar'

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

function App() {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Sidebar></Sidebar>
      <Home></Home>
    </div>
  );
}

export default App;