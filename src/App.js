import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import BlogList from "./components/blog/BlogList";
import SingleBlog from './components/blog/SingleBlog';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={BlogList}></Route>
          <Route path="/single/:postid" render={props => (
            <SingleBlog {...props} />
          )}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
